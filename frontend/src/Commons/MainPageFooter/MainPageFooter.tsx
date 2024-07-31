import { Dispatch, SetStateAction } from 'react';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import Toggle from '@Commons/Toggle/Toggle';
import ToggleText from '@Constants/ToggleText';
import StyledMainFooter from './MainPageFooter.styles';

interface MainPageFooterProps {
  toggleEnabled?: boolean;
  setToggleEnabled?: Dispatch<SetStateAction<boolean>>;
}
const MainPageFooter = ({
  toggleEnabled = true,
  setToggleEnabled = () => {},
}: MainPageFooterProps) => (
  <StyledMainFooter>
    <InformationIcons
      text={ToggleText}
      toggleIcon
      rightPositioned
      toggleEnabled
    />
    <Toggle
      toggleEnabled={toggleEnabled}
      onToggleChange={setToggleEnabled}
    />
  </StyledMainFooter>
);

export default MainPageFooter;
