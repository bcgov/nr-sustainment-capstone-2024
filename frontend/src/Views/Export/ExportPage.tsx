/**
 * @desc Export page for downloading your work in nmp format
 * @author @GDamaso
 */

import Button from '@Commons/Button/Button.tsx';
import { Link } from 'react-router-dom';
import MainPageHeader from '@Commons/MainPageHeader/MainPageHeader.tsx';
import MainPageFooter from '@Commons/MainPageFooter/MainPageFooter.tsx';
import { FC } from 'react';
import CustomLink from '@Commons/CustomLink/CustomLink.tsx';
import { StyledContent, StyledLandingContainer } from './ExportPage.styles.ts';

const ExportPage: FC = () => {
  const downloadFile = () => {
    // localStorage.clear();
    const nmpString = localStorage.getItem('farmDetails');
    const nmpJSON = nmpString && JSON.parse(nmpString);
    console.log(nmpJSON);
  };

  return (
    <StyledLandingContainer>
      <MainPageHeader />
      <StyledContent>
        <div id="dataFileHeader">
          <p>NMP Data File </p>
        </div>
        <p>To continue later, Download this file to your computer or mobile device.</p>
        <p>Load a NMP file on the Homepage when you want to continue.</p>

        <p>
          <Link
            to="/export"
            target="_blank"
          >
            How to use this data file
          </Link>
        </p>
        <Button
          size="md"
          text="Download file"
          handleClick={downloadFile}
        />
      </StyledContent>
      <CustomLink
        path="/main"
        text="Return to Calculation"
        size="lg"
      />
      <MainPageFooter />
    </StyledLandingContainer>
  );
};

export default ExportPage;
