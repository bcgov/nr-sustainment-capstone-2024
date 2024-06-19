import Button from '@Commons/Button/Button.tsx';
import {
  StyledContent,
  StyledButtonGroup,
  StyledDivider,
  StyledLandingContainer,
} from './LandingPage.styles.ts';

const LandingPage = () => {
  const handleUpload = () => {
    const labelButton = document.getElementById('fileUp');
    labelButton && labelButton.click();
  };

  const isValidFile = (file: File): boolean => file.type === 'application/json' || file.name.endsWith('.nmp');

  const parseFile = (e: any) => {
    console.log('Reading file');
    const file = e.target.files[0];

    if (!isValidFile(file)) {
      console.log('Invalid file type!');
      return;
    }

    const fr = new FileReader();
    fr.readAsText(file);

    fr.onload = () => {
      const data = fr.result;
      data && localStorage.setItem('farmDetails', data.toString());
    };
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
      <StyledButtonGroup>
        <Button
          size="lg"
          text="New Calculation"
          disabled={false}
          path="/main"
        />
        <StyledDivider>or</StyledDivider>
        <label htmlFor="fileUp">
          <Button
            size="lg"
            text="Load Existing File"
            handleClick={handleUpload}
          />
          <input
            id="fileUp"
            type="file"
            accept=".nmp, application/json"
            onChange={parseFile}
            hidden
          />
        </label>
      </StyledButtonGroup>
    </StyledLandingContainer>
  );
};

export default LandingPage;
