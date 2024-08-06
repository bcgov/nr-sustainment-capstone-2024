import { Dispatch, SetStateAction } from 'react';
import Toggle from '@Commons/Toggle/Toggle';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import ToggleText from '@Constants/ToggleText';
import {
  StyledHeader,
  Logo,
  Title,
  ToggleContainer,
  InfoButtonContainer,
} from './MainPageHeader.styles';

interface MainPageHeaderProps {
  toggleEnabled?: boolean;
  setToggleEnabled?: Dispatch<SetStateAction<boolean>>;
  isHeaderVisible?: boolean;
}

const MainPageHeader = ({
  toggleEnabled = true,
  setToggleEnabled = () => {},
  isHeaderVisible = true,
}: MainPageHeaderProps) => (
  <StyledHeader isHeaderVisible={isHeaderVisible}>
    <a href="/">
      <Logo alt="bc-logo" />
    </a>
    <Title>Better Berries</Title>
    <ToggleContainer>
      <InfoButtonContainer>
        <InformationIcons
          text={ToggleText}
          toggleIcon
          rightPositioned
          headerDesktop
          toggleEnabled
        />
      </InfoButtonContainer>
      <Toggle
        toggleEnabled={toggleEnabled}
        onToggleChange={setToggleEnabled}
      />
    </ToggleContainer>
  </StyledHeader>
);

export default MainPageHeader;
