import { StyledHeader, Logo, Title } from './MainPageHeader.styles';

const MainPageHeader = () => (
  <StyledHeader>
    <a href="/">
      <Logo alt="bc-logo" />
    </a>
    <Title>Better Berries</Title>
  </StyledHeader>
);

export default MainPageHeader;
