/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Field and Soil Input Module
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';
import { FormProps } from 'src/Types/FormProps';

const StyledFarmInfo = styled.div<FormProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 20px;

  #inputContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: ${screenSizes.desktop}) {
      flex-direction: row;
      position: relative;
      width: 50%;
      gap: 30px;
    }
  }
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: ${(props) => (props.formNutrients ? 'row' : 'column')};
  }
`;

const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 30px;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledAreaContainer = styled.div<FormProps>`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: auto;
  position: relative;
  margin-left: ${(props) => (props.formCrops ? '5px' : 0)};
  p {
    position: relative;
    top: 25px;
    left: 10px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    margin-left: 0;
    p {
      top: 35px;
    }
  }
`;
const StyledButtonGroupContainer = styled.div<FormProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  width: 320px;
  justify-content: flex-end;
  .nutrientsButton {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: center;
  }
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    margin: 0;
    justify-content: flex-start;
    width: 67px;
    .nutrientsButton {
      flex-direction: row;
      margin-top: ${(props) => (props.formNutrients ? '25px' : '0')};
      position: absolute;
      width: 350px;
      right: 0;
    }
  }
`;
const StyledTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledRadioGroupContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 150px;
  @media (min-width: ${screenSizes.desktop}) {
    max-width: 200px;
  }
`;

const HeaderLabel = styled.div`
  display: flex;
  align-items: center;
  min-height: 25px;
  h3 {
    font: ${tokens.typographyBoldSmallBody};
    margin: 0;
  }
  span {
    margin-left: 10px;
    position: relative;
  }

  @media (min-width: ${screenSizes.desktop}) {
    min-height: 40px;
    h3 {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

const StyledWarningBlock = styled.div`
  border: 1px solid ${tokens.supportBorderColorWarning};
  border-radius: 4px;
  font: ${tokens.typographyRegularLabel};
  padding: 10px 20px 0 20px;

  ul {
    padding: 10px 0 0 10px;
  }
`;

const StyledSelectContainer = styled.div`
  width: 100%;

  @media (min-width: ${screenSizes.desktop}) {
    width: 30%;
  }
`;

const InputFieldsGroup = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    width: 700px;
    gap: 20px;
  }
`;

const SingleInputField = styled.div`
  width: 70vw;

  @media (min-width: ${screenSizes.desktop}) {
    width: 290px;
  }
`;

export {
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledAreaContainer,
  StyledButtonGroupContainer,
  StyledTestContainer,
  StyledRadioGroupContainer,
  HeaderLabel,
  StyledWarningBlock,
  StyledSelectContainer,
  InputFieldsGroup,
  SingleInputField,
};
