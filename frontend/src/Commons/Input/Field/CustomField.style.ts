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

  input {
    border: solid 1px ${tokens.surfaceColorBorderDefault};
    border-radius: 3px;
    width: ${(props) => props.mobileWidth};
    height: 21px;
    font: ${tokens.typographyRegularLabel};
  }

  @media (min-width: ${screenSizes.desktop}) {
    // margin-top: 24px;

    input {
      width: ${(props) => props.desktopWidth};
      font: ${tokens.typographyRegularSmallBody};
      height: 21px;
    }
  }
`;
const StyledLabel = styled.div<StyledLabelProps>`
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

export { StyledField, StyledLabel };
