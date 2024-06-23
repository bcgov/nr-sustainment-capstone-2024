import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import {
  Container,
  StyledItem,
  StyledItemTextShort,
  StyledItemTextLong,
} from './ProgressItem.styles';

export type ProgressProps = {
  InputModule: InputModuleInterface;
};

const ProgressItem = ({ InputModule }: ProgressProps) => {
  const {
    name: { long, short },
    enable,
    faIcon,
    status,
  } = InputModule;
  console.log(status);
  return (
    <Container>
      <StyledItem
        InputModule={InputModule}
        active={enable}
        status={status}
      >
        <FontAwesomeIcon icon={faIcon} />
      </StyledItem>
      <StyledItemTextShort>{short}</StyledItemTextShort>
      <StyledItemTextLong>{long}</StyledItemTextLong>
    </Container>
  );
};

export default ProgressItem;
