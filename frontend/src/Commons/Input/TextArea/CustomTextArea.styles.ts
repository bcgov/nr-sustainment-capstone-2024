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
  width: 100%;
  margin-top: 5px;

  label {
    font-weight: ${tokens.typographyFontWeightsBold};
  }
  textarea {
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
    resize: none;
    height: 76px;

    @media (min-width: ${screenSizes.desktop}) {
      height: 56px;
    }
  }

  @media (min-width: ${screenSizes.desktop}) {
    width: ${(props) => props.width};
  }
`;

export default StyledField;
