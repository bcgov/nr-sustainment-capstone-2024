/**
 * @desc Main Page of Better Berries App
 * @author @GDamaso
 */
import React, { useState } from 'react';
import MainPageHeader from '@Commons/MainPageHeader/MainPageHeader';
import ProgressBar from '@Commons/ProgressBar/ProgressBar';
import MainPageFooter from '@Commons/MainPageFooter/MainPageFooter';
import FormModule from '@Commons/Forms/FormModule/FormModule.tsx';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import * as InputModules from '@Commons/Forms/InputModules/index';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
import { StyledMain, StyledMainContainer } from './MainPage.styles';

// The sequence of sections to show up on the main page
// This is the skeleton for the Berries workflow
// Uncomment sections as they are implemented to have them instantiated ;)
const mockBerriesWorkflow: InputModuleInterface[] = [
  { ...InputModules.FarmInformation, status: 'active' },
  { ...InputModules.FieldsAndSoil, status: 'inactive' },
  { ...InputModules.Summary, status: 'inactive' },
];

const loadFarmDetails = (farmDetails: FarmDetailsInterface): FarmDetailsInterface => {
  const nmpString = localStorage.getItem('farmDetails');
  const nmpJSON = nmpString && JSON.parse(nmpString);
  const updateFarmDetails = { ...farmDetails };

  if (nmpJSON) {
    const nmpFarmDetails = nmpJSON.farmDetails;
    const fieldsJSON: FieldDetailInterface[] = nmpJSON.years[0].Fields;

    updateFarmDetails.FarmName = nmpFarmDetails.FarmName;
    updateFarmDetails.Year = nmpFarmDetails.Year;

    if (nmpFarmDetails.FarmRegion === 21) {
      updateFarmDetails.FarmRegion = 'Vancouver Island';
    }

    fieldsJSON.forEach((field) => {
      const updateField: FieldDetailInterface = field;
      updateFarmDetails.Fields.push(updateField);
    });
    updateFarmDetails.Fields = nmpJSON.years[0].Fields;
  }

  return updateFarmDetails;
};

const MainPage: React.FC = () => {
  const [farmDetails, setFarmDetails] = useState(loadFarmDetails(initialFarmDetails));
  const [formStates, setFormStates] = useState(mockBerriesWorkflow);
  const [currForm, setCurrForm] = useState(0);

  /**
   * @summary   Pass this handler to children who need to update InputModule states
   * @desc      A State handler that will update the current form section states,
   *            allowing you to expand/collapse form sections.
   *            ** In the future, also update the ProgressBar status **
   * @param     moduleID: string => An InputModule ID to be searched and updated
   * @param     nextModuleID: string => A second InputModule ID to be searched and updated
   */
  const handleFormState = (moduleID: string, nexModuleID?: string, prevModuleID?: string) => {
    const updatedStates = formStates.map((module: InputModuleInterface) => {
      if (module.id === moduleID || module.id === nexModuleID) {
        return {
          ...module,
          enable: !module.enable,
        };
      }
      if (module.id === prevModuleID) {
        return {
          ...module,
          enable: !module.enable,
        };
      }
      return module;
    });
    console.log(updatedStates);
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
    handleFormState(
      formStates[currForm].id,
      formStates[currForm + 1].id,
    );
    setCurrForm((prevForm) => prevForm + 1);
    setFormStates((prevStates) => prevStates.map((module, index) => {
      if (index === currForm) {
        return { ...module, status: 'completed' };
      }
      if (index === currForm + 1) {
        return { ...module, status: 'active' };
      }
      return module;
    }));
  };

  const handleBackState = () => {
    handleFormState(
      formStates[currForm].id,
      formStates[currForm - 1].id,
    );
    setCurrForm((prevForm: number): number => {
      if (prevForm > 0) {
        return prevForm - 1;
      }
      return prevForm;
    });
    setFormStates((prevStates) => prevStates.map((module, index) => {
      if (index === currForm) {
        return { ...module, status: 'needattention' };
      }
      if (index === currForm - 1) {
        return { ...module, status: 'completed' };
      }
      return module;
    }));
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
                handleBackState={handleBackState}
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
