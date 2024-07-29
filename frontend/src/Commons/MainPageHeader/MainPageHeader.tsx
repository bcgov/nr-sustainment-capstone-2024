import { Dispatch, SetStateAction } from 'react';
import Toggle from '@Commons/Toggle/Toggle';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import ToggleText from '@Constants/ToggleText';
import { StyledHeader, Logo, Title, ToggleContainer } from './MainPageHeader.styles';

interface MainPageHeaderProps {
  toggleEnabled: boolean;
  setToggleEnabled: Dispatch<SetStateAction<boolean>>;
}

const MainPageHeader = ({ toggleEnabled, setToggleEnabled }: MainPageHeaderProps) => (
  <StyledHeader>
    <a href="/">
      <Logo alt="bc-logo" />
    </a>
    <Title>Better Berries</Title>
    <ToggleContainer>
      <InformationIcons
        text={ToggleText}
        toggleIcon
        rightPositioned
        headerDesktop
        toggleEnabled={toggleEnabled}
      />
      <Toggle onToggleChange={setToggleEnabled} />
    </ToggleContainer>
  </StyledHeader>
);

export default MainPageHeader;
