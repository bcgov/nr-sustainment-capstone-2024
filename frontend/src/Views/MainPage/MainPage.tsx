/**
 * @desc Main Page of Better Berries App
 * @author @GDamaso @Kcaparas
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
   * @param formMovement: string => A movement that indicates if you go back or forward
   */
  const handleFormState = (formMovement?: string) => {
    const moduleID = formStates[currForm].id;
    let secondModuleID = formStates[currForm].id;
    switch (formMovement) {
      case 'back':
        if (currForm > 0) {
          secondModuleID = formStates[currForm - 1].id;
          setCurrForm((prevForm) => prevForm - 1);
          setFormStates((formState) => formState.map((module: InputModuleInterface) => {
            if (module.id === moduleID) {
              return {
                ...module,
                enable: !module.enable,
                status: 'needattention',
              };
            }
            if (module.id === secondModuleID) {
              return {
                ...module,
                enable: !module.enable,
                status: 'completed',
              };
            }
            return module;
          }));
        }
        break;
      case 'forward':
        if (currForm < formStates.length - 1) {
          secondModuleID = formStates[currForm + 1].id;
          setCurrForm((prevForm) => prevForm + 1);
          setFormStates((formState) => formState.map((module: InputModuleInterface) => {
            if (module.id === moduleID) {
              return {
                ...module,
                enable: !module.enable,
                status: 'completed',
              };
            }
            if (module.id === secondModuleID) {
              return {
                ...module,
                enable: !module.enable,
                status: 'active',
              };
            }
            return module;
          }));
        }
        break;
      default:
        break;
    }
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
    handleFormState('forward');
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
