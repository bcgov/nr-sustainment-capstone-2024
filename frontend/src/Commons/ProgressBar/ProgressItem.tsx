import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';
import screenSizeWithoutPX from '@Constants/ScreenSizewithoutPX';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { Container, StyledItem, StyledIcon, StyledItemText } from './ProgressItem.styles';

export type ProgressProps = {
  InputModule: InputModuleInterface;
};

const ProgressItem = ({ InputModule }: ProgressProps) => {
  const { name: { long, short }, enable, faIcon } = InputModule;
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  console.log(screenSizeWithoutPX.desktop);
  console.log(isDesktop);
  return (
    <Container>
      <StyledItem
        InputModule={InputModule}
        active={enable}
      >
        <StyledIcon>
          <FontAwesomeIcon icon={faIcon} />
        </StyledIcon>
      </StyledItem>
      <StyledItemText>{isDesktop ? long : short }</StyledItemText>
    </Container>
  );
};

export default ProgressItem;
