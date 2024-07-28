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
  select {
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
    height: 30px;
    background-color: ${tokens.themeGrayWhite};
  }

  @media (min-width: ${screenSizes.desktop}) {
    width: ${(props) => props.width};
  }
`;

const StyledLabel = styled.div`
  label {
    display: flex;
    align-items: flex-end;
    font: ${tokens.typographyBoldSmallBody};
  }
  span {
    margin-bottom: 2px;
  }
  @media (min-width: ${screenSizes.desktop}) {
    label {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

export { StyledSelect, StyledLabel };
