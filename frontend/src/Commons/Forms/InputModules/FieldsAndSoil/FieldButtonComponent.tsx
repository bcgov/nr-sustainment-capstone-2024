import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '@Commons/Button/Button';
import { StyledAddCancelButtonContainer, StyledBack } from './FieldButtonComponent.styles';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledNewFieldButtonContainer,
  StyledNewFieldButtonController,
} from '../../../Button/FieldButtonGroup.style';

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

const FieldButtonGroup: React.FC<ButtonGroupProps> = ({
  addNewField,
  submitFarmInfo,
  handleFormState,
  buttonText,
  disabled,
}) => {
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);
  const clickWrapper = () => {
    handleFormState('back');
  };
  const handleNewField = () => {
    addNewField();
    setButtonDisabled(false);
  };
  return (
    <StyledButtonGroupContainer>
      <StyledNewFieldButtonContainer>
        <StyledNewFieldButtonController>
          <Button
            type="button"
            size="lg"
            disabled={!disabled}
            radius="50px"
            actions="secondary"
            text={buttonText.addField}
            handleClick={handleNewField}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </StyledNewFieldButtonController>
      </StyledNewFieldButtonContainer>
      <StyledAddCancelButtonContainer>
        <StyledBack>
          <Button
            type="button"
            size="lg"
            disabled={!disabled}
            actions="secondary"
            text={buttonText.back}
            handleClick={clickWrapper}
          />
        </StyledBack>
        <StyledButtonContainer>
          <Button
            type="button"
            size="lg"
            disabled={isButtonDisabled}
            text={buttonText.next}
            handleClick={submitFarmInfo}
          />
        </StyledButtonContainer>
      </StyledAddCancelButtonContainer>
    </StyledButtonGroupContainer>
  );
};

export default FieldButtonGroup;
