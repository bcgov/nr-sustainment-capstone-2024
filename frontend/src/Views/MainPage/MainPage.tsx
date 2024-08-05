/**
 * @desc Main Page of Better Berries App
 * @author @GDamaso @Kcaparas
 */
import { useEffect, useState, useCallback, FC } from 'react';
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
import convertToNMP from '@Utils/convertToNMP';
import FertilizerInterface from '@Interface/FertilizerInterface';
import { StyledMain, StyledMainContainer } from './MainPage.styles';

// The sequence of sections to show up on the main page
// This is the skeleton for the Berries workflow
// Uncomment sections as they are implemented to have them instantiated ;)
const mockBerriesWorkflow: InputModuleInterface[] = [
  InputModules.FarmInformation,
  InputModules.FieldsAndSoil,
  InputModules.Crops,
  InputModules.Fertilizers,
  InputModules.CalculateNutrients,
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

const getLocalFertilizers = () => {
  const fertString = localStorage.getItem(Names.FERTILIZER_DETAILS);
  try {
    if (fertString) {
      const parsedFertString = JSON.parse(fertString);
      if (Array.isArray(parsedFertString)) {
        return parsedFertString;
      }
    }
  } catch (err) {
    console.error(err);
  }
  return [];
};

/**
 * @desc      Load an .nmp string object from localStorage to the MainPage,
 *            converting it to JSON and making some basic .nmp to bb mapping.
 * @author    @GDamaso
 */
const loadFarmDetails = (farmDetails: FarmDetailsInterface): FarmDetailsInterface => {
  const localDetails = getLocalDetails();
  const updatedFarmDetails = { ...farmDetails };

  if (localDetails) {
    const nmpFarmDetails = localDetails.farmDetails;
    const fieldsJSON: FieldDetailInterface[] = localDetails.years[0].Fields;

    updatedFarmDetails.FarmName = nmpFarmDetails.FarmName;
    updatedFarmDetails.Year = nmpFarmDetails.Year;

    if (nmpFarmDetails.FarmRegion === 21) {
      updatedFarmDetails.FarmRegion = 'Vancouver Island';
    }

    fieldsJSON.forEach((field) => {
      const updateField: FieldDetailInterface = field;
      updatedFarmDetails.Fields.push(updateField);
    });
    updatedFarmDetails.Fields = localDetails.years[0].Fields;
  }

  return updatedFarmDetails;
};

const loadFertDetails = (): FertilizerInterface[] => {
  const localFerts: FertilizerInterface[] = getLocalFertilizers();
  const updatedFertDetails: FertilizerInterface[] = [];

  if (localFerts) {
    localFerts.forEach((fertilizer) => updatedFertDetails.push(fertilizer));
  }
  return updatedFertDetails;
};

const initialFertilizersDetails: FertilizerInterface[] = loadFertDetails();

const MainPage: FC = () => {
  const localStorageDetails = getLocalDetails();
  const [farmDetails, setFarmDetails] = useState(loadFarmDetails(initialFarmDetails));
  const [fertDetails, setFertDetails] = useState<FertilizerInterface[]>(initialFertilizersDetails);
  const [localDetails, setLocalDetails] = useState(localStorageDetails);
  const [formStates, setFormStates] = useState(mockBerriesWorkflow);
  const [currForm, setCurrForm] = useState(0);
  const [toggleEnabled, setToggleEnabled] = useState<boolean>(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  /**
   * @desc    Take our apps main data object and save it to a template .nmp file,
   *          saved in the users localStorage.
   *          This is virtually where conversion between farmDetails and .nmp happens.
   *          The equivalent atributes should be mapped here.
   * @param   newDetails: FarmDetailsInterface => Our main data object in our own data structure
   */
  const updateLocalDetails = (newDetails: FarmDetailsInterface) => {
    setLocalDetails((prevDetails: NmpInterface) => {
      if (prevDetails) {
        return convertToNMP(newDetails, prevDetails);
      }
      return prevDetails;
    });
  };

  useEffect(() => {
    if (localDetails) {
      localStorage.setItem(Names.FARM_DETAILS, JSON.stringify(localDetails));
    }
    if (fertDetails) {
      localStorage.setItem(Names.FERTILIZER_DETAILS, JSON.stringify(fertDetails));
    }
  }, [localDetails, fertDetails]);

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
        newState.enable = true;
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
  const updateFarmDetails = (newDetails: FarmDetailsInterface, inputModuleID: string): void => {
    setFarmDetails(newDetails);
    updateLocalDetails(newDetails);
    if (inputModuleID === formStates[currForm].id)
      handleFormState(CmdOptions.FORWARDS, undefined, COMPLETED);
    else handleFormState(inputModuleID, true);
  };

  /**
   * @summary   Handler for updating the Nutrients Data of the Calculator.
   * @desc      This updates the temporaryStorage for nutrient data before it gets assigned
   *            to the farmInformation in the Calculation Module
   * @param     newNutrients => A new 'TempNutrientInterface' object with new data from
   *            from the nutrient module.
   * */
  const updateFertDetails = (newFerts: FertilizerInterface[]): void => {
    setFertDetails(newFerts);
  };

  const scrollHeader = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollDelta = Math.abs(scrollTop - lastScrollTop);
    // trigger if scrolling goes beyond 10px
    if (scrollDelta > 10) {
      // going up
      if (scrollTop > lastScrollTop) {
        setIsHeaderVisible(false);
        // going down
      } else {
        setIsHeaderVisible(true);
      }
    }
    setLastScrollTop(scrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, [scrollHeader]);

  return (
    <StyledMain>
      <MainPageHeader
        toggleEnabled={toggleEnabled}
        setToggleEnabled={setToggleEnabled}
        isHeaderVisible={isHeaderVisible}
      />
      <ProgressBar
        formStates={formStates}
        isHeaderVisible={isHeaderVisible}
      />
      <StyledMainContainer>
        {formStates.map((InputModule) => {
          if (InputModule) {
            return (
              <FormModule
                InputModule={InputModule}
                farmDetails={farmDetails}
                fertilizersDetails={fertDetails}
                updateFarmDetails={updateFarmDetails}
                updateFertDetails={updateFertDetails}
                handleFormState={handleFormState}
                toggleEnabled={toggleEnabled}
                key={InputModule.id}
              />
            );
          }
          return null;
        })}
      </StyledMainContainer>
      <MainPageFooter
        toggleEnabled={toggleEnabled}
        setToggleEnabled={setToggleEnabled}
      />
    </StyledMain>
  );
};

export default MainPage;
