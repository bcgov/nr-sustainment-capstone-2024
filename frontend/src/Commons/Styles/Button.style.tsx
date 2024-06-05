import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '../../Constants/ScreenSize';

const StyledButton = styled.button`
  max-height: 40px;
  height: 100%;
  width: 100%;
  max-width: 327px;
  background-color: ${tokens.surfaceColorPrimaryButtonDefault};
  color: ${tokens.typographyColorPrimaryInvert};
  border-radius: 8px;
  border: 0;
  padding:10px;
  font-family: ${tokens.typographyFontFamiliesBcSans};
  font-weight: ${tokens.typographyFontWeightsBold};
  
  @media (min-width: ${screenSizes.desktop}){
    max-height: 59px;
    max-width: 483px;
    
  }
`;

export default StyledButton;
