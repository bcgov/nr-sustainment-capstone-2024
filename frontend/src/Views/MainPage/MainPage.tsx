/**
 * @desc Main Page of Better Berries App
 * @author @GDamaso @Kcaparas
 */
import { useEffect, useState, useCallback, FC } from 'react';
import MainPageHeader from '@Commons/MainPageHeader/MainPageHeader';
import ProgressBar from '@Commons/ProgressBar/ProgressBar';
import MainPageFooter from '@Commons/MainPageFooter/MainPageFooter';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import NmpInterface from '@Interface/NmpInterface';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import { ACTIVE, COMPLETED, WARNING } from '@Constants/ModuleStatus';
import CmdOptions from '@Constants/CmdOptions';
import convertToNMP from '@Utils/convertToNMP';
import FertilizerInterface from '@Interface/FertilizerInterface';
import { getLocalDetails, loadFarmDetails } from '@Utils/getLocalDetails';
import { loadLocalFormStates } from '@Utils/getLocalFormStates';
import InputModuleInterface from '@Interface/InputModuleinterface';
import FormModule from '@Commons/Forms/FormModule/FormModule';
import { loadFertDetails } from '@Utils/getLocalFertilizers';
import * as InputModules from '@Commons/Forms/InputModules/index';
import LocalStorageNames from '@Constants/LocalStorageNames';
import { FERTILIZERS } from '@Constants/ModuleIDs';
import { StyledMain, StyledMainContainer } from './MainPage.styles';

const initialFertilizersDetails: FertilizerInterface[] = loadFertDetails();

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

const MainPage: FC = () => {
  const localStorageDetails = getLocalDetails();
  const [farmDetails, setFarmDetails] = useState(loadFarmDetails(initialFarmDetails));
  const [fertDetails, setFertDetails] = useState<FertilizerInterface[]>(initialFertilizersDetails);
  const [localDetails, setLocalDetails] = useState(localStorageDetails);
  const [formStates, setFormStates] = useState<InputModuleInterface[]>(
    loadLocalFormStates(mockBerriesWorkflow),
  );
  const [currForm, setCurrForm] = useState(
    parseInt(localStorage.getItem(LocalStorageNames.CURRENT_FORM) ?? '0', 10),
  );
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
    try {
      if (localDetails)
        localStorage.setItem(LocalStorageNames.FARM_DETAILS, JSON.stringify(localDetails));
      if (fertDetails)
        localStorage.setItem(LocalStorageNames.FERTILIZER_DETAILS, JSON.stringify(fertDetails));
      if (formStates)
        localStorage.setItem(LocalStorageNames.FORM_STATES, JSON.stringify(formStates));
      if (currForm) localStorage.setItem(LocalStorageNames.CURRENT_FORM, JSON.stringify(currForm));
    } catch (err) {
      console.error(err);
    }
  }, [localDetails, fertDetails, formStates, currForm]);

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
  const handleFormState = (
    cmd: string,
    toggle?: boolean,
    status?: string,
    moveBackModuleID?: string,
  ) => {
    // currModuleID can be any InputModule that's passed to this handler
    let currModuleID = formStates[currForm].id;
    // nextModuleID is the last activated InputModule, they are activated through the Next button
    // which uses 'cmd = forwards' argument
    let nextModuleID = null;
    // Respect ESLint no-param reassign
    let tgl = toggle;

    switch (cmd) {
      case CmdOptions.BACKWARDS:
        if (currForm > 0 && formStates[currForm].id === moveBackModuleID) {
          nextModuleID = formStates[currForm - 1].id;
          setCurrForm((prevForm) => prevForm - 1);
        } else if (moveBackModuleID) currModuleID = moveBackModuleID;
        tgl = true;
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
        if (moveBackModuleID === undefined) newState.status = ACTIVE;
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
  const updateFertDetails = (newFerts: FertilizerInterface[], moveNext: boolean): void => {
    setFertDetails(newFerts);
    if (!moveNext) return;

    if (formStates[currForm].id === FERTILIZERS)
      handleFormState(CmdOptions.FORWARDS, undefined, COMPLETED);
    else handleFormState(FERTILIZERS, true);
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
      <StyledMainContainer isHeaderVisible={isHeaderVisible}>
        {formStates.map((InputModule: InputModuleInterface) => {
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
