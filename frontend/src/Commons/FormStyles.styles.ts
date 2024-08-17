/**
 * @desc Styling with BC Design Tokens and Emotion for Form Modules
 *
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';
import { FormProps } from 'src/Types/FormProps';

const StyledFormContainer = styled.div<FormProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;
  gap: 24px;

  /* Container for two input fields to be a row instead of columns */
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

/**
 * @description   This is reused through 2 forms Fields and Crops Form Module.
 *                Can be improved to make even more DRY. Pass props to change specific design.
 */
const StyledButtonGroupContainer = styled.div<FormProps>`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
  margin: auto;
  width: 300px;
  height: 86px;
  justify-content: flex-end;
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    margin: 0;
    justify-content: flex-end;
    width: 100%;
    height: auto;
  }
`;
const StyledFieldTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
const StyledFieldRadioGroupContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 150px;
  gap: 109px;
  @media (min-width: ${screenSizes.desktop}) {
    max-width: 200px;
  }
`;

const FieldsFormHeaderLabel = styled.div`
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

/**
 * @description Warning Block for any Balance notificatons.
 *              Can be used in the Calculate Nutrients balance notifications to notify users
 *              for any extra or missing Nitrogen, Phosphorus, or Potassium.
 */
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

const StyledFieldFormSelectContainer = styled.div`
  width: 100%;

  @media (min-width: ${screenSizes.desktop}) {
    width: 30%;
  }
`;

/**
 * @description   Container div for two input fields in Fields and Soil For,
 *                built from mobile-first design. Separates other input fields into groups.
 */
const InputFieldsGroup = styled.div<{ hasNO3label?: boolean }>`
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.hasNO3label ? '12px' : '0')}; // added more gap due to information icons.
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    width: 700px;
    gap: ${(props) => (props.hasNO3label ? '25px' : '20px')};
  }
`;

/**
 * @description Related to above styled div. but single since there's nothing to group.
 */
const SingleInputField = styled.div`
  width: 70vw;

  @media (min-width: ${screenSizes.desktop}) {
    width: 290px;
  }
`;

export {
  StyledFormContainer,
  StyledTextAreaContainer,
  StyledButtonGroupContainer,
  StyledFieldTestContainer,
  StyledFieldRadioGroupContainer,
  FieldsFormHeaderLabel,
  StyledWarningBlock,
  StyledFieldFormSelectContainer,
  InputFieldsGroup,
  SingleInputField,
};
