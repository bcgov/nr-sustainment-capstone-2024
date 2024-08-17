import Button from '@Commons/Button/Button.tsx';
import { templateNMP } from '@Constants/templateNMP.ts';

import LoacalStorageNames from '@Constants/LocalStorageNames.ts';
import {
  StyledContent,
  StyledLandingButtonGroup,
  StyledDivider,
  StyledLandingContainer,
} from './LandingPage.styles.ts';

const LandingPage = () => {
  localStorage.clear();
  const handleUpload = () => {
    const upload = document.getElementById('fileUp');
    if (upload) upload.click();
  };

  const isValidFile = (file: File): boolean =>
    file.type === 'application/json' || file.name.endsWith('.nmp');

  const saveFile = (e: any) => {
    const file = e.target.files[0];

    if (!isValidFile(file)) {
      return;
    }

    const fr = new FileReader();
    fr.readAsText(file);

    fr.onload = () => {
      const data = fr.result;
      // data is not a JSON yet at this point. It's still .nmp
      if (data) localStorage.setItem(LoacalStorageNames.FARM_DETAILS, data.toString());
    };
    window.location.href = '/main';
  };

  const newCalcHandler = () => {
    localStorage.clear();
    // Our template is a JSON .nmp compatible object
    localStorage.setItem(LoacalStorageNames.FARM_DETAILS, JSON.stringify(templateNMP));
    window.location.href = '/main';
  };

  return (
    <StyledLandingContainer>
      <StyledContent>
        <h2>About the nutrient calculator</h2>
        <p>
          For BC berry farmers, who maintain soil nutrient levels, Better Berries is a simple
          nutrient calculator that lets you manage your crops&apos; on the go. Our application is
          intuitive to use and mobile friendly, allowing you to manage your soil nutrients
          effectively.
        </p>
      </StyledContent>
      <StyledLandingButtonGroup>
        <Button
          text="New Calculation"
          size="lg"
          handleClick={newCalcHandler}
          aria-label="New Calculation"
          landingPageButton
        />
        <StyledDivider>or</StyledDivider>
        <Button
          size="lg"
          text="Load Existing File"
          handleClick={handleUpload}
          aria-label="Upload File"
          landingPageButton
        />
        <input
          id="fileUp"
          type="file"
          accept=".nmp, application/json"
          onChange={saveFile}
          aria-label="Upload File"
          hidden
        />
      </StyledLandingButtonGroup>
    </StyledLandingContainer>
  );
};

export default LandingPage;
