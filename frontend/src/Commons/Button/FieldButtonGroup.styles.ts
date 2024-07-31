/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Field and Soil Button Component Module
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import { FormProps } from 'src/Types/FormProps';

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
    // height: ${(props) => (props.formCalc ? '50px' : '0')};
  }
`;
const StyledButtonContainer = styled.div<FormProps>`
  // margin-top: 20px;
  width: ${(props) => (props.formCalc ? '100%' : '')};
  max-width: 327px;
  @media (min-width: ${screenSizes.desktop}) {
    display: flex;
    width: 100%;
    max-width: ${(props) => (props.formCalc ? '100%' : '67px')};
    justify-content: center;
  }
`;
const StyledNewFieldButtonController = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media (min-width: ${screenSizes.desktop}) {
    width: 178px;
  }
`;

const StyledAddCancelButtonContainer = styled.div<FormProps>`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
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
