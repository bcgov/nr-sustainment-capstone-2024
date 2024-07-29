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

const StyledField = styled.div<StyledFieldProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  margin-top: 5px;

  input {
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
  }
`;

const StyledLabel = styled.div`
  display: flex;
  gap: 20px;
  min-height: 25px;
  label {
    font: ${tokens.typographyBoldSmallBody};
  }

  @media (min-width: ${screenSizes.desktop}) {
    min-height: 40px;
    label {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

export { StyledField, StyledLabel };
