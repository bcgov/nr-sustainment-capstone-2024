/**
 * @desc Styling with BC Design Tokens and Emotion for Reusable Select Dropdown component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type StyledSelectProps = {
  width: string;
  formCalc?: boolean;
};

const StyledSelect = styled.div<StyledSelectProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.formCalc ? '100%' : '80%')};
  margin-top: 5px;
  label {
    font: ${tokens.typographyBoldSmallBody};
  }

  select {
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
    height: 30px;
    background-color: ${tokens.themeGrayWhite};
  }

  @media (min-width: ${screenSizes.desktop}) {
    label {
      font: ${tokens.typographyBoldLargeBody};
    }
    width: ${(props) => props.width};
  }
`;

export default StyledSelect;
