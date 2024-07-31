import { Dispatch, SetStateAction } from 'react';
import Toggle from '@Commons/Toggle/Toggle';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import ToggleText from '@Constants/ToggleText';
import { StyledHeader, Logo, Title, ToggleContainer } from './MainPageHeader.styles';

interface MainPageHeaderProps {
  toggleEnabled?: boolean;
  setToggleEnabled?: Dispatch<SetStateAction<boolean>>;
  isBubbleDisplayed?: boolean;
  setDisplayedBubble?: Dispatch<SetStateAction<boolean>>;
}

const MainPageHeader = ({
  toggleEnabled = true,
  setToggleEnabled = () => {},
  isBubbleDisplayed,
  setDisplayedBubble,
}: MainPageHeaderProps) => (
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
        toggleEnabled
        isBubbleDisplayed={isBubbleDisplayed}
        setDisplayedBubble={setDisplayedBubble}
      />
      <Toggle
        toggleEnabled={toggleEnabled}
        onToggleChange={setToggleEnabled}
      />
    </ToggleContainer>
  </StyledHeader>
);

export default MainPageHeader;
