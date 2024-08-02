/**
 * @desc Styling with BC Design Tokens and Emotion for Footer component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type StyledFieldProps = {
  width: string;
};

type StyledLabelProps = {
  hasText?: boolean;
};

const StyledField = styled.div<StyledFieldProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  margin-top: 12px;

  input {
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    margin-top: 24px;
  }
`;

const StyledLabel = styled.div<StyledLabelProps>`
  display: flex;
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
