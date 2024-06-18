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
  label {
    font-weight: ${tokens.typographyFontWeightsBold};
  }
  input {
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
  }
`;

export default StyledField;
