/**
 * @desc Styling with BC Design Tokens and Emotion for Reusable Select Dropdown component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type StyledSelectProps = {
  mobileWidth: string;
  desktopWidth: string;
  formCalc?: boolean;
};

const StyledSelect = styled.div<StyledSelectProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.mobileWidth};
  margin-top: 5px;
  select {
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
    height: 28px;
    background-color: ${tokens.themeGrayWhite};
  }

  @media (min-width: ${screenSizes.desktop}) {
    width: ${(props) => props.desktopWidth};
  }
`;

const StyledLabel = styled.div`
  min-height: 25px;
  label {
    display: flex;
    align-items: flex-end;
    font: ${tokens.typographyBoldSmallBody};
  }
  span {
    margin-bottom: 2px;
  }
  @media (min-width: ${screenSizes.desktop}) {
    min-height: 40px;
    label {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

export { StyledSelect, StyledLabel };
