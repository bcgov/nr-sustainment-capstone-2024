/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Field and Soil Button Component Module
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import { FormProps } from 'src/Types/FormProps';

/**
 * @description   Reused in other FormModules. Container for a group of Buttons.
 */
const StyledButtonGroupContainer = styled.div<FormProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  width: 100%;
  justify-content: flex-end;
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding-right: 9px;
  }
`;

/**
 * @description   Container for a Button.
 */
const StyledButtonContainer = styled.div<FormProps>`
  width: 100%;
  max-width: 327px;
  @media (min-width: ${screenSizes.desktop}) {
    display: flex;
    width: 100%;
    max-width: ${(props) => {
      if (props.formCalc) {
        return '100%';
      }
      if (props.formNutrients) {
        return '140px';
      }
      return '67px';
    }};
    justify-content: center;
    white-space: nowrap;
  }
`;

// This could be simplify with the other NewFieldButton Styling.
const StyledNewFieldButtonController = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media (min-width: ${screenSizes.desktop}) {
    width: 159px;
    white-space: nowrap;
  }
`;

const StyledAddCancelButtonContainer = styled.div<FormProps>`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
  align-items: center;
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    gap: 40px;
    margin-top: 10px;
  }
`;
const StyledNewFieldButtonContainer = styled.div<FormProps>`
  position: relative;
  top: 15px;
  width: 100%;
  margin-bottom: ${(props) => (props.formCrops ? '40px' : '0')};
  @media (min-width: ${screenSizes.desktop}) {
    left: 0;
  }
`;

export {
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
  StyledNewFieldButtonController,
};
