/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Field and Soil Button Component Module
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import { FormProps } from 'src/Types/FormProps';

const StyledButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  width: 320px;
  justify-content: flex-end;
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;
const StyledButtonContainer = styled.div`
  margin-top: 20px;

  @media (min-width: ${screenSizes.desktop}) {
    width: 50%;
  }
`;
const StyledNewFieldButtonController = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media (min-width: ${screenSizes.desktop}) {
    width: 178px;
    position: relative;
    left: 0;
  }
`;

const StyledAddCancelButtonContainer = styled.div<FormProps>`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    gap: 20px;
    position: absolute;
    right: ${(props) => (props.formCrops ? '0' : '17%')};
  }
`;
const StyledNewFieldButtonContainer = styled.div`
  position: relative;
  top: 15px;
  width: 100%;

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
