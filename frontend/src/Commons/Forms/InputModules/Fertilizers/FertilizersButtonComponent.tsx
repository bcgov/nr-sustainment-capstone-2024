import { FC } from 'react';
import ComponentText from '@Constants/ComponentText';
import CmdOptions from '@Constants/CmdOptions';
import Button from '@Commons/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { COMPLETED } from '@Constants/ModuleStatus';
import Calculate from '@Utils/Calculate/Calculate';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
  StyledNewFieldButtonController,
  PrimaryButton,
  SecondaryButton,
} from '@Commons/Button/FieldButtonGroup.styles';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';

type ButtonComponentProps = {
  addNewFertilizer: () => void;
  submitFertDetails?: () => void;
  handleFormState(cmd: string, toggle?: boolean, status?: string): void;
  farmDetails: FarmDetailsInterface;
};

const FertilizersButtonComponent: FC<ButtonComponentProps> = ({
  addNewFertilizer,
  handleFormState,
  submitFertDetails,
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
          text={ComponentText.ADD_FERTILIZERS}
          handleClick={addNewFertilizer}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </StyledNewFieldButtonController>
    </StyledNewFieldButtonContainer>
    <StyledAddCancelButtonContainer>
      <SecondaryButton>
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
      </SecondaryButton>
      <PrimaryButton>
        <StyledButtonContainer>
          <Button
            type="button"
            size="lg"
            disabled={false}
            text={ComponentText.NEXT}
            handleClick={() => {
              if (submitFertDetails) submitFertDetails();
              handleFormState(CmdOptions.FORWARDS, undefined, COMPLETED);
              console.log(Calculate(farmDetails.Fields[0]));
            }}
          />
        </StyledButtonContainer>
      </PrimaryButton>
    </StyledAddCancelButtonContainer>
  </StyledButtonGroupContainer>
);

export default FertilizersButtonComponent;
