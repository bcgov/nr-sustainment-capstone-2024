import React from 'react';
import Button from '@Commons/Button/Button';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
} from '../../../Button/FieldButtonGroup.style';

type CropsButtonGroupProps = {
  submitFarmInfo: () => void;
  handleFormState: (cmd?: string) => void;
  buttonText: {
    back: string;
    next: string;
  };
  disabled: boolean;
};

const CropsButtonGroup: React.FC<CropsButtonGroupProps> = ({
  submitFarmInfo,
  handleFormState,
  buttonText,
  disabled,
}) => {
  const clickWrapper = () => {
    handleFormState('back');
  };

  return (
    <StyledButtonGroupContainer>
      <StyledAddCancelButtonContainer>
        <StyledButtonContainer>
          <Button
            type="button"
            size="lg"
            disabled={!disabled}
            actions="secondary"
            text={buttonText.back}
            handleClick={clickWrapper}
          />
        </StyledButtonContainer>
        <StyledButtonContainer>
          <Button
            type="button"
            size="lg"
            disabled={!disabled}
            text={buttonText.next}
            handleClick={submitFarmInfo}
          />
        </StyledButtonContainer>
      </StyledAddCancelButtonContainer>
    </StyledButtonGroupContainer>
  );
};

export default CropsButtonGroup;
