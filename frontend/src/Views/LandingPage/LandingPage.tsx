import Button from '@Commons/Button/Button.tsx';
import {
  StyledContent,
  StyledButtonGroup,
  StyledDivider,
  StyledLandingContainer,
} from './LandingPage.styles.ts';

const LandingPage = () => (
  <StyledLandingContainer>
    <StyledContent>
      <h2>About the nutrient calculator</h2>
      <p>
        For BC berry farmers, who maintain soil nutrient levels, Better Berries is a simple nutrient
        calculator that lets you manage your crops&apos; on the go. Our application is intuitive to
        use and mobile friendly, allowing you to manage your soil nutrients effectively.
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
      <Button
        size="lg"
        text="Load Existing File"
        disabled={false}
        path="/"
      />
    </StyledButtonGroup>
  </StyledLandingContainer>
);

export default LandingPage;
