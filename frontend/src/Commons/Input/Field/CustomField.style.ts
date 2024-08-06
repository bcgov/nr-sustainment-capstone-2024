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
};

const StyledField = styled.div<StyledFieldProps>`
  display: flex;
  flex-direction: column;

  margin-top: 12px;

  input {
    border: solid 1px ${tokens.surfaceColorBorderDefault};
    border-radius: 3px;
    width: ${(props) => props.mobileWidth};
    height: 21px;
    font: ${tokens.typographyRegularSmallBody};
  }

  @media (min-width: ${screenSizes.desktop}) {
    margin-top: 24px;

    input {
      width: ${(props) => props.desktopWidth};
      height: 28px;
    }
  }
`;
const StyledLabel = styled.div<StyledLabelProps>`
  display: flex;
  height: 28px;
  gap: 20px;
  label {
    font: ${tokens.typographyBoldSmallBody};
  }

  @media (min-width: ${screenSizes.desktop}) {
    min-height: 0;
    label {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

export { StyledField, StyledLabel };
