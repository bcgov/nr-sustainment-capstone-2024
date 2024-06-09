import { StyledHeader, Logo, Title } from './MainPageHeader.styles';
import bcLogo from '/assets/BCID-logo-mobile.png';

const MainPageHeader = () => (
  <StyledHeader>
    <Logo src={bcLogo} alt="bc-logo" />
    <Title>Better Berries</Title>
  </StyledHeader>
);

export default MainPageHeader;
