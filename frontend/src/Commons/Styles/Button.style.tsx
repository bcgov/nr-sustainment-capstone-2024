import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '../../Constants/ScreenSize';

const StyledButton = styled.button`
  max-height: 40px;
  max-width: 327px;
  background-color: ${tokens.surfaceColorPrimaryButtonDefault};
  color: ${tokens.typographyColorPrimaryInvert};
  border-radius: 8px;
  border: 0;

  @media (min-width: ${screenSizes.desktop}){
    max-height: 59px;
    height:100%;
    width:100%;
    max-width: 483px;
    padding:10px;
  }
`;

export default StyledButton;
