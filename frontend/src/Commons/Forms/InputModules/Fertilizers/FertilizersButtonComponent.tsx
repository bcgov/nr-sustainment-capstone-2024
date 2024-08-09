import { FC } from 'react';
import ComponentText from '@Constants/ComponentText';
import CmdOptions from '@Constants/CmdOptions';
import Button from '@Commons/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { COMPLETED } from '@Constants/ModuleStatus';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
  StyledNewFieldButtonController,
} from '@Commons/Button/FieldButtonGroup.styles';
import { FERTILIZERS } from '@Constants/ModuleIDs';

type ButtonComponentProps = {
  addNewFertilizer: () => void;
  handleFormState(cmd: string, toggle?: boolean, status?: string, moveBackModuleID?: string): void;
};

const FertilizersButtonComponent: FC<ButtonComponentProps> = ({
  addNewFertilizer,
  handleFormState,
}) => (
  <StyledButtonGroupContainer>
    <StyledNewFieldButtonContainer>
      <StyledNewFieldButtonController>
        <Button
          type="button"
          size="lg"
          disabled={false}
          radius="50px"
          actions="secondary"
          addButton
          text={ComponentText.ADD_FERTILIZERS}
          handleClick={addNewFertilizer}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </StyledNewFieldButtonController>
    </StyledNewFieldButtonContainer>
    <StyledAddCancelButtonContainer>
      <StyledButtonContainer>
        <Button
          type="button"
          size="lg"
          disabled={false}
          actions="secondary"
          text={ComponentText.BACK}
          handleClick={() =>
            handleFormState(CmdOptions.BACKWARDS, undefined, undefined, FERTILIZERS)
          }
        />
      </StyledButtonContainer>
      <StyledButtonContainer>
        <Button
          type="button"
          size="lg"
          disabled={false}
          text={ComponentText.NEXT}
          handleClick={() => {
            handleFormState(CmdOptions.FORWARDS, undefined, COMPLETED);
          }}
        />
      </StyledButtonContainer>
    </StyledAddCancelButtonContainer>
  </StyledButtonGroupContainer>
);

export default FertilizersButtonComponent;
