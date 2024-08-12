import { FC } from 'react';
import ComponentText from '@Constants/ComponentText';
import CmdOptions from '@Constants/CmdOptions';
import Button from '@Commons/Button/Button';
import CustomLink from '@Commons/CustomLink/CustomLink';
import {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
} from '@Commons/Button/FieldButtonGroup.styles';
import { CALCULATE_NUTRIENTS } from '@Constants/ModuleIDs';

type ButtonComponentProps = {
  handleFormState(cmd: string, toggle?: boolean, status?: string, moveBackModuleID?: string): void;
};

const CalculationButtonGroup: FC<ButtonComponentProps> = ({ handleFormState }) => (
  <StyledButtonGroupContainer formCalc>
    <StyledAddCancelButtonContainer>
      <StyledButtonContainer>
        <Button
          type="button"
          size="lg"
          disabled={false}
          actions="secondary"
          text={ComponentText.BACK}
          handleClick={() =>
            handleFormState(CmdOptions.BACKWARDS, undefined, undefined, CALCULATE_NUTRIENTS)
          }
        />
      </StyledButtonContainer>
      <StyledButtonContainer>
        <CustomLink
          path="/export"
          size="lg"
          text="Finish"
          finishButton
        />
      </StyledButtonContainer>
    </StyledAddCancelButtonContainer>
  </StyledButtonGroupContainer>
);

export default CalculationButtonGroup;
