import ComponentText from '@Constants/ComponentText';
import Button from '@Commons/Button/Button';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
} from './FieldsButtonComponent.styles';

interface ButtonComponentProps {
    addNewField: () => void;
    submitFarmInfo: () => void;
}
const FieldsButtonComponent: React.FC<ButtonComponentProps> = ({ addNewField, submitFarmInfo }) => (
  <StyledButtonGroupContainer>
    <StyledNewFieldButtonContainer>
      <StyledButtonContainer>
        <Button
          type="button"
          size="md"
          disabled={false}
          radius="50px"
          actions="secondary"
          text={ComponentText.NEWFIELD}
          handleClick={addNewField}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </StyledButtonContainer>
    </StyledNewFieldButtonContainer>
    <StyledAddCancelButtonContainer>
      <StyledButtonContainer>
        <Button
          type="reset"
          size="sm"
          disabled={false}
          actions="secondary"
          text={ComponentText.BACK}
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
FieldsButtonComponent.propTypes = {
  addNewField: PropTypes.func.isRequired,
  submitFarmInfo: PropTypes.func.isRequired,
};
export default FieldsButtonComponent;
