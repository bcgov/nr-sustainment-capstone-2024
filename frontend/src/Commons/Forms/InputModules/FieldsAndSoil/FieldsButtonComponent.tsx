import { FC } from 'react';
import ComponentText from '@Constants/ComponentText';
import CmdOptions from '@Constants/CmdOptions';
import Button from '@Commons/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
  StyledNewFieldButtonController,
} from '../../../Button/FieldButtonGroup.styles';

type ButtonComponentProps = {
  addNewField: () => void;
  updateFarmDetails: (newFarmDetails: FarmDetailsInterface) => void;
  handleFormState(cmd: string, toggle?: boolean, status?: string): void;
  farmDetails: FarmDetailsInterface;
};

const FieldsButtonComponent: FC<ButtonComponentProps> = ({
  addNewField,
  updateFarmDetails,
  handleFormState,
  farmDetails,
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
          handleClick={() => handleFormState(CmdOptions.BACKWARDS)}
        />
      </StyledButtonContainer>
      <StyledButtonContainer>
        <Button
          type="button"
          size="lg"
          disabled={false}
          text={ComponentText.NEXT}
          handleClick={() => {
            updateFarmDetails(farmDetails);
          }}
        />
      </StyledButtonContainer>
    </StyledAddCancelButtonContainer>
  </StyledButtonGroupContainer>
);
export default FieldsButtonComponent;
