import Button from '../Commons/Button';
import { StyledContent, StyledButtonGroup, StyledDivider } from './Styles/LandingPage.styles';

const LandingPage = () => (
  <>
    <StyledContent>
      <h1>About the nutrient calculator</h1>
      <p>
        For BC berry farmers, who maintain soil nutrient levels, Better Berries is a simple nutrient
        calculator that lets you manage your crops&apos; on the go. Our application is intuitive to
        use and mobile friendly, allowing you to manage your soil nutrients effectively.
      </p>
    </StyledContent>
    <StyledButtonGroup>
      <Button text="New Calculation" path="/main" />
      <StyledDivider>or</StyledDivider>
      <Button text="Load Existing File" />
    </StyledButtonGroup>
  </>
);

export default LandingPage;
