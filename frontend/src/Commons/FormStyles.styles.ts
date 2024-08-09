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
  align-items: left;
  height: 100%;
  gap: 24px;

  #inputContainer {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (min-width: ${screenSizes.desktop}) {
      display: flex;
      flex-direction: row;
      width: 100%;
      gap: 32px;
    }
  }
  @media (min-width: ${screenSizes.desktop}) {
    padding-top: 24px;
    flex-direction: ${(props) => (props.formNutrients ? 'row' : 'column')};
  }
`;

const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
  }
`;

const StyledButtonGroupContainer = styled.div<FormProps>`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
  margin: auto;
  width: 300px;
  height: 86px;
  justify-content: flex-end;
  .nutrientsButton {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    align-items: center;
  }
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    margin: 0;
    justify-content: flex-end;
    width: 100%;
    height: auto;
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
  gap: 11px;
`;
const StyledRadioGroupContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 150px;
  gap: 109px;
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
  padding: 11px 20px 0 19px;
  margin: 14px 0 0 0;

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

const InputFieldsGroup = styled.div<{ hasNO3label?: boolean }>`
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.hasNO3label ? '12px' : '0')};
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    width: 700px;
    gap: ${(props) => (props.hasNO3label ? '25px' : '20px')};
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
  StyledButtonGroupContainer,
  StyledTestContainer,
  StyledRadioGroupContainer,
  HeaderLabel,
  StyledWarningBlock,
  StyledSelectContainer,
  InputFieldsGroup,
  SingleInputField,
};
