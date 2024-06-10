import { StyledHeader, Logo, Title } from './Header.style';
import bcLogo from '/assets/BCID-logo-mobile.png';

const Header = () => (
  <StyledHeader>
    <Logo
      src={bcLogo}
      alt="bc-logo"
    />
    <Title>Better Berries</Title>
  </StyledHeader>
);

export default Header;
