import { StyledHeader, Logo, Title } from './LandingPageHeader.style';
import bcLogo from '/assets/BCID-logo-mobile.png';

const LandingPageHeader = () => (
  <StyledHeader>
    <Logo src={bcLogo} alt="bc-logo" />
    <Title>Better Berries</Title>
  </StyledHeader>
);

export default LandingPageHeader;
