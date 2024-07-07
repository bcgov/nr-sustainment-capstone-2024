import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '@Commons/Button/Button';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
  StyledNewFieldButtonController,
} from './FieldButtonGroup.style';

type ButtonGroupProps = {
  addNewField: () => void;
  submitFarmInfo: () => void;
  handleFormState: (cmd?: string) => void;
  buttonText: {
    addField: string;
    back: string;
    next: string;
  };
  disabled: boolean;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  addNewField,
  submitFarmInfo,
  handleFormState,
  buttonText,
  disabled
}) => {
  const clickWrapper = () => {
    handleFormState('back');
  };

  return (
    <StyledButtonGroupContainer>
      <StyledNewFieldButtonContainer>
        <StyledNewFieldButtonController>
          <Button
            type="button"
            size="lg"
            disabled={disabled}
            radius="50px"
            actions="secondary"
            text={buttonText.addField}
            handleClick={addNewField}
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
            disabled={disabled}
            actions="secondary"
            text={buttonText.back}
            handleClick={clickWrapper}
          />
        </StyledButtonContainer>
        <StyledButtonContainer>
          <Button
            type="button"
            size="lg"
            disabled={disabled}
            text={buttonText.next}
            handleClick={submitFarmInfo}
          />
        </StyledButtonContainer>
      </StyledAddCancelButtonContainer>
    </StyledButtonGroupContainer>
  );
};

export default ButtonGroup;
