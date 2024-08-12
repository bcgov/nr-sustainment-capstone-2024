/**
 * @desc Export page for downloading your work in nmp format
 * @author @GDamaso
 */
import Button from '@Commons/Button/Button.tsx';
import MainPageHeader from '@Commons/MainPageHeader/MainPageHeader.tsx';
import MainPageFooter from '@Commons/MainPageFooter/MainPageFooter.tsx';
import { FC, useState } from 'react';
import CustomLink from '@Commons/CustomLink/CustomLink.tsx';
import InformationIcons from '@Commons/InformationIcons/InformationIcons.tsx';
import LoacalStorageNames from '@Constants/LocalStorageNames.ts';
import { StyledContent, StyledLandingContainer, ParagraphContainer } from './ExportPage.styles.ts';

const ExportPage: FC = () => {
  const [toggleEnabled, setToggleEnabled] = useState<boolean>(true);
  const downloadFile = () => {
    const nmpString = localStorage.getItem(LoacalStorageNames.FARM_DETAILS);
    const nmpJSON = nmpString && JSON.parse(nmpString);
    const nmpBlob = nmpString && new Blob([nmpString], { type: 'application/json' });
    const nmpUrl = nmpBlob && URL.createObjectURL(nmpBlob);
    const link = document.createElement('a');

    if (nmpUrl) {
      link.href = nmpUrl;
      link.download = `${nmpJSON.farmDetails.FarmName}-BB.nmp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  const arrayText: string[] = [
    'Download your NMP file',
    'Locate it on your computer, or mobile',
    'Click Load Existing File button in the Homepage',
    'Select your NMP file',
  ];
  return (
    <StyledLandingContainer>
      <MainPageHeader
        toggleEnabled={toggleEnabled}
        setToggleEnabled={setToggleEnabled}
      />
      <StyledContent>
        <div id="dataFileHeader">
          <h2>NMP Data File </h2>
        </div>
        <p>To continue later, Download this file to your computer or mobile device.</p>
        <p>Load a NMP file on the Homepage when you want to continue.</p>

        <ParagraphContainer>
          How to use this data file
          <span>
            <InformationIcons
              arrayText={arrayText}
              toggleEnabled={toggleEnabled}
              rightPositioned
            />
          </span>
        </ParagraphContainer>
        <Button
          size="md"
          text="Download file"
          landingPageButton
          handleClick={downloadFile}
        />
      </StyledContent>
      <CustomLink
        path="/main"
        text="Return to Calculation"
        size="lg"
        returnToCalc
      />
      <MainPageFooter />
    </StyledLandingContainer>
  );
};

export default ExportPage;
