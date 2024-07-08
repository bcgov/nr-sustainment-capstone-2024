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
  StyledNewFieldButtonController,
} from './FieldsButtonComponent.styles';

type ButtonComponentProps = {
  addNewField: () => void;
  updateFarmDetails: () => void;
  handleFormState(cmd: string, toggle?: boolean, status?: string): void;
};

const FieldsButtonComponent: React.FC<ButtonComponentProps> = ({
  addNewField,
  updateFarmDetails,
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
          text={ComponentText.ADD_FIELD}
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
          disabled={false}
          actions="secondary"
          text={ComponentText.BACK}
          handleClick={() => handleFormState('back')}
        />
      </StyledButtonContainer>
      <StyledButtonContainer>
        <Button
          type="button"
          size="lg"
          disabled={false}
          text={ComponentText.NEXT}
          handleClick={updateFarmDetails}
        />
      </StyledButtonContainer>
    </StyledAddCancelButtonContainer>
  </StyledButtonGroupContainer>
);
export default FieldsButtonComponent;
