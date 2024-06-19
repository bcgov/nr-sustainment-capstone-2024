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
import { StyledMain, StyledMainContainer } from './MainPage.styles';

// The sequence of sections to show up on the main page
// This is the skeleton for the Berries workflow
// Uncomment sections as they are implemented to have them instantiated ;)
const mockBerriesWorkflow: InputModuleInterface[] = [
  InputModules.FarmInformation,
  InputModules.FieldsAndSoil,
  // InputModules.ManureAndCompost,
  // InputModules.Calculate,
  InputModules.Summary,
];

// Initial Values for calculation, some defaults are being used
const initialFarmDetails: FarmDetailsInterface = {
  Year: '2024',
  FarmName: 'Kents Steed',
  FarmRegion: '',
  HasBerries: true,
  Fields: [
    {
      FieldName: '',
      Area: 0,
      Comments: null,
    },
  ],
};

const loadFarmDetails = (farmDetails: FarmDetailsInterface) => {
  const nmpString = localStorage.getItem('farmDetails');
  const nmpJSON = nmpString && JSON.parse(nmpString);

  if (nmpJSON) {
    // for (const element in nmpJSON.farmDetails) {
    //   if (farmDetails.hasOwnProperty(element)) {
    //     farmDetails[element] = nmpJSON.farmDetails[element];
    //   }
    // }
    farmDetails.FarmName = nmpJSON.farmDetails.FarmName;
    farmDetails.Year = nmpJSON.farmDetails.Year;
    if (nmpJSON.farmDetails.FarmRegion == 21) {
      farmDetails.FarmRegion = 'Vancouver Island';
    }
    farmDetails.Fields = nmpJSON.years[0].Fields;
  }
  console.log(nmpJSON);
  console.log(farmDetails);
  return farmDetails;
  // for (const element in farmDetails.Fields[0]) {
  //   if (fdJSON.years[0].Fields[0].hasOwnProperty(element)) {
  //     console.log(element);
  //   }
  // }
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
  const handleFormState = (moduleID: string, nexModuleID?: string) => {
    const updatedStates = formStates.map((module: InputModuleInterface) => {
      if (module.id === moduleID || module.id === nexModuleID) {
        return {
          ...module,
          enable: !module.enable,
        };
      }
      return module;
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
    handleFormState(formStates[currForm].id, formStates[currForm + 1].id);
    setCurrForm((prevForm) => prevForm + 1);
  };

  return (
    <StyledMain>
      <MainPageHeader />
      <ProgressBar />
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
