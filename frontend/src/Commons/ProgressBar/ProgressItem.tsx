import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, StyledItem, StyledIcon, StyledItemText } from './ProgressItem.styles';

export type ProgressProps = {
  text: string;
  favIcon: IconDefinition;
  active?: boolean;
};
const ProgressItem = ({ text, favIcon, active = false }: ProgressProps) => (
  <Container>
    <StyledItem
      favIcon={favIcon}
      active={active}
    >
      <StyledIcon>
        <FontAwesomeIcon icon={favIcon} />
      </StyledIcon>
    </StyledItem>
    <StyledItemText>{text}</StyledItemText>
  </Container>
);

export default ProgressItem;
