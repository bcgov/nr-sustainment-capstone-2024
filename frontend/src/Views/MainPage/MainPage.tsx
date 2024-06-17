/**
 * @desc Main Page of Better Berries App
 * @author @GDamaso
 */
import React, { useState } from 'react';
import MainPageHeader from '@Commons/MainPageHeader/MainPageHeader';
import ProgressBar from '@Commons/ProgressBar/ProgressBar';
import MainPageFooter from '@Commons/MainPageFooter/MainPageFooter';
import FormModule from '@Commons/Forms/FormModule/FormModule.tsx';
import * as inputModules from '@Commons/Forms/InputModules/index';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import { StyledMain, StyledMainContainer } from './MainPage.styles';

// The sequence of sections to show up on the main page
// This is the skeleton for the Berries workflow
// Uncomment sections as they are implemented to have them instantiated ;)
const mockBerriesWorkflow = [
  { InputModuleID: 'FarmInformation' },
  { InputModuleID: 'FieldsAndSoil' },
  { InputModuleID: 'ManureAndCompost' },
  { InputModuleID: 'Calculate' },
  { InputModuleID: 'Summary' },
];

// Initial Values for calculation, some defaults are being used
const initialFarmDetails: FarmDetailsInterface = {
  Year: 2024,
  FarmName: '',
  FarmRegion: '',
  HasBerries: true,
};

const MainPage: React.FC = () => {
  const [farmDetails, setFarmDetails] = useState(initialFarmDetails);

  const updateFarmDetails = (newDetails: FarmDetailsInterface) => {
    setFarmDetails(newDetails);
  };

  return (
    <StyledMain>
      <MainPageHeader />
      <ProgressBar />
      <StyledMainContainer>
        {mockBerriesWorkflow.map((formSection) => {
          // Not sure what type to use for `inputModules` here
          const InputModule: InputModuleInterface = (inputModules as any)[
            formSection.InputModuleID
          ];
          if (InputModule) {
            return (
              <FormModule
                InputModule={InputModule}
                farmDetails={farmDetails}
                updateFarmDetails={updateFarmDetails}
                key={formSection.InputModuleID}
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
