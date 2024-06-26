import ComponentText from '@Constants/ComponentText';
import Button from '@Commons/Button/Button';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
} from './FieldsButtonComponent.styles';

type ButtonComponentProps = {
  addNewField: () => void;
  submitFarmInfo: () => void;
  handleFormState(cmd?: string): void;
};

const FieldsButtonComponent: React.FC<ButtonComponentProps> = ({
  addNewField,
  submitFarmInfo,
  handleFormState,
}) => {
  const clickWrapper = () => {
    handleFormState('back');
  };
  return (
    <StyledButtonGroupContainer>
      <StyledNewFieldButtonContainer>
        <StyledButtonContainer>
          <Button
            type="button"
            size="md"
            disabled={false}
            radius="50px"
            actions="secondary"
            text={ComponentText.ADD_FIELD}
            handleClick={addNewField}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </StyledButtonContainer>
      </StyledNewFieldButtonContainer>
      <StyledAddCancelButtonContainer>
        <StyledButtonContainer>
          <Button
            type="button"
            size="sm"
            disabled={false}
            actions="secondary"
            text={ComponentText.BACK}
            handleClick={clickWrapper}
          />
        </StyledButtonContainer>
        <StyledButtonContainer>
          <Button
            type="button"
            size="sm"
            disabled={false}
            text={ComponentText.NEXT}
            handleClick={submitFarmInfo}
          />
        </StyledButtonContainer>
      </StyledAddCancelButtonContainer>
    </StyledButtonGroupContainer>
  );
};
export default FieldsButtonComponent;
