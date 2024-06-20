/**
 * @desc Export page for downloading your work in nmp format
 * @author @GDamaso
 */

import Button from '@Commons/Button/Button.tsx';
import MainPageHeader from '@Commons/MainPageHeader/MainPageHeader.tsx';
import MainPageFooter from '@Commons/MainPageFooter/MainPageFooter.tsx';
import { FC } from 'react';
import { StyledContent, StyledButtonGroup, StyledLandingContainer } from './ExportPage.styles.ts';

const ExportPage: FC = () => {
  const downloadFile = () => {
    localStorage.clear();
    console.log('Downloading');
  };

  return (
    <StyledLandingContainer>
      <MainPageHeader />
      <StyledContent>
        <div id="dataFileHeader">
          <h6>NMP Data File </h6>
        </div>
        <p>To continue later, Download this file to your computer or mobile device.</p>
        <p>Load a NMP file on the Homepage when you want to continue.</p>
        <a href="https://nmp.apps.nrs.gov.bc.ca/Report/Report#">
          <p>How to use this data file</p>
        </a>
        <Button
          size="md"
          text="Download file"
          handleClick={downloadFile}
        />
      </StyledContent>
      <StyledButtonGroup>
        <Button
          size="lg"
          text="Return to Calculation"
          path="/main"
        />
      </StyledButtonGroup>
      <MainPageFooter />
    </StyledLandingContainer>
  );
};

export default ExportPage;
