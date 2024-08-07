/**
 * @desc Styling with BC Design Tokens and Emotion for Footer component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type StyledFieldProps = {
  mobileWidth: string;
  desktopWidth: string;
};

type StyledLabelProps = {
  hasText?: boolean;
  isYield?: boolean;
};

const StyledField = styled.div<StyledLabelProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isYield ? '4px' : '0')};
`;
const StyledLabel = styled.div`
  display: flex;
  gap: 20px;
  label {
    font: ${tokens.typographyBoldSmallBody};
  }

  @media (min-width: ${screenSizes.desktop}) {
    label {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

const StyledInputField = styled.div<StyledFieldProps>`
  width: ${(props) => props.mobileWidth};
  display: flex;
  gap: 5px;
  input {
    width: 100%;
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
    height: 21px;
    background-color: ${tokens.themeGrayWhite};
    font: ${tokens.typographyRegularLabel};
  }
  span {
    display: flex;
    align-items: center;
    height: 21px;
    width: 50%;
    font: ${tokens.typographyRegularLabel};
  }
  @media (min-width: ${screenSizes.desktop}) {
    width: ${(props) => props.desktopWidth};
    input {
      font: ${tokens.typographyRegularSmallBody};
      width: 100%;
    }
  }
  // display: inline-flex;
  // align-items: center;
  // gap: 5px;
  // height: 21px;

  // span {
  //   display: flex;
  //   align-items: center;
  //   height: 21px;
  //   font: ${tokens.typographyRegularLabel};
  // }

  // input {
  //   height: 100%;
  // }

  // @media (min-width: ${screenSizes.desktop}) {
  //   font: ${tokens.typographyRegularSmallBody};
  // }
`;

export { StyledField, StyledLabel, StyledInputField };
