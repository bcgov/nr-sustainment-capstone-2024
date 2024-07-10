/**
 * @desc Main Page of Better Berries App
 * @author @GDamaso @Kcaparas
 */
import { useEffect, useState, FC } from 'react';
import MainPageHeader from '@Commons/MainPageHeader/MainPageHeader';
import ProgressBar from '@Commons/ProgressBar/ProgressBar';
import MainPageFooter from '@Commons/MainPageFooter/MainPageFooter';
import FormModule from '@Commons/Forms/FormModule/FormModule';
import * as InputModules from '@Commons/Forms/InputModules/index';
import InputModuleInterface from '@Interface/InputModuleinterface';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import NmpInterface from '@Interface/NmpInterface';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import { ACTIVE, COMPLETED, WARNING } from '@Constants/ModuleStatus';
import CmdOptions from '@Constants/CmdOptions';
import Names from '@Constants/Names';
import { StyledMain, StyledMainContainer } from './MainPage.styles';

// The sequence of sections to show up on the main page
// This is the skeleton for the Berries workflow
// Uncomment sections as they are implemented to have them instantiated ;)
const mockBerriesWorkflow: InputModuleInterface[] = [
  InputModules.FarmInformation,
  InputModules.FieldsAndSoil,
  InputModules.Summary,
];

const getLocalDetails = () => {
  const nmpString = localStorage.getItem(Names.FARM_DETAILS);
  try {
    if (nmpString) return JSON.parse(nmpString);
  } catch (err) {
    console.error(err);
  }
  return null;
};

const loadFarmDetails = (farmDetails: FarmDetailsInterface): FarmDetailsInterface => {
  const localDetails = getLocalDetails();
  const updateFarmDetails = { ...farmDetails };

  if (localDetails) {
    const nmpFarmDetails = localDetails.farmDetails;
    const fieldsJSON: FieldDetailInterface[] = localDetails.years[0].Fields;

    updateFarmDetails.FarmName = nmpFarmDetails.FarmName;
    updateFarmDetails.Year = nmpFarmDetails.Year;

    if (nmpFarmDetails.FarmRegion === 21) {
      updateFarmDetails.FarmRegion = 'Vancouver Island';
    }

    fieldsJSON.forEach((field) => {
      const updateField: FieldDetailInterface = field;
      updateFarmDetails.Fields.push(updateField);
    });
    updateFarmDetails.Fields = localDetails.years[0].Fields;
  }

  return updateFarmDetails;
};

const MainPage: FC = () => {
  const localStorageDetails = getLocalDetails();
  const [farmDetails, setFarmDetails] = useState(loadFarmDetails(initialFarmDetails));
  const [localDetails, setLocalDetails] = useState(localStorageDetails);
  const [formStates, setFormStates] = useState(mockBerriesWorkflow);
  const [currForm, setCurrForm] = useState(0);

  const updateLocalDetails = (newDetails: FarmDetailsInterface) => {
    setLocalDetails((prevDetails: NmpInterface) => {
      if (prevDetails) {
        return {
          ...prevDetails,
          farmDetails: {
            ...prevDetails.farmDetails,
            FarmName: newDetails.FarmName,
            Year: newDetails.Year,
          },
          years: [{ ...prevDetails.years[0], Year: newDetails.Year }],
        };
      }
      return prevDetails;
    });
  };

  useEffect(() => {
    if (localDetails) {
      localStorage.setItem(Names.FARM_DETAILS, JSON.stringify(localDetails));
    }
  }, [localDetails]);

  /**
   * @summary   Pass this handler to children who need to update InputModule states
   * @desc      A State handler that will update the current form section states,
   *            allowing you to expand/collapse form sections or update it's statuses
   *            on the ProgressBar.
   * @param     cmd: string => A command to move back, forward or an InputModuleID to be updated
   * @param     toggle: boolean => When passing an InputModuleID, expand/collapse this module
   * @param     status: string => Passed if a module status should be updated.
   *            ('active', warning', 'completed')
   */
  const handleFormState = (cmd: string, toggle?: boolean, status?: string) => {
    // currModuleID can be any InputModule that's passed to this handler
    let currModuleID = formStates[currForm].id;
    // nextModuleID is the last activated InputModule, they are activated through the Next button
    // which uses 'cmd = forwards' argument
    let nextModuleID = null;
    // Respect ESLint no-param reassign
    let tgl = toggle;

    switch (cmd) {
      case CmdOptions.BACKWARDS:
        if (currForm >= 0) {
          nextModuleID = formStates[currForm - 1].id;
          setCurrForm((prevForm) => prevForm - 1);
          tgl = true;
        }
        break;
      case CmdOptions.FORWARDS:
        if (formStates[currForm + 1]) {
          nextModuleID = formStates[currForm + 1].id;
          setCurrForm((prevForm) => prevForm + 1);
          tgl = true;
        }
        break;
      default:
        currModuleID = cmd;
        break;
    }

    const updatedStates = formStates.map((module: InputModuleInterface) => {
      const newState = {
        ...module,
      };

      if (module.id === currModuleID) {
        newState.enable = tgl ? !newState.enable : newState.enable;
        // Do not warn the usr on active status forms
        if (status !== WARNING) {
          newState.status = status || newState.status;
        }
        // Do warn the user on other statuses
        if (newState.status !== ACTIVE && status === WARNING) {
          newState.status = status || newState.status;
        }
      }

      // For cmds that go forwards or backward
      if (newState.id === nextModuleID) {
        newState.enable = tgl ? !newState.enable : newState.enable;
        newState.status = ACTIVE;
      }
      return newState;
    });

    setFormStates(updatedStates);
  };

  /**
   * @summary   Handler for updating the Main Data of the Calculator.
   * @desc      This updates the Main Data objet being built, 'farmDetails'.
   *            Since after an update, the form should take you to the next section,
   *            it calls the form state handler to update states automatically <3
   * @param     newDetails => A new 'FarmDetailsInterface' object with new data from
   *            from a form section.
   * */
  const updateFarmDetails = (newDetails: FarmDetailsInterface) => {
    setFarmDetails(newDetails);
    updateLocalDetails(newDetails);
    handleFormState(CmdOptions.FORWARDS, undefined, COMPLETED);
  };

  return (
    <StyledMain>
      <MainPageHeader />
      <ProgressBar formStates={formStates} />
      <StyledMainContainer>
        {formStates.map((InputModule) => {
          if (InputModule) {
            return (
              <FormModule
                InputModule={InputModule}
                farmDetails={farmDetails}
                updateFarmDetails={updateFarmDetails}
                handleFormState={handleFormState}
                key={InputModule.id}
              />
            );
          }
          return null;
        })}
      </StyledMainContainer>
      <MainPageFooter />
    </StyledMain>
  );
};

export default MainPage;
