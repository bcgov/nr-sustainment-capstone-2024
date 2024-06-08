/**
 * @desc Styling with BC Design Tokens and Emotion for Footer component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '../../Constants/ScreenSize';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  margin-top: auto;
  margin-bottom: 20px;
  color: ${tokens.typographyColorPlaceholder};
  font: ${tokens.typographyRegularLabel};
  p {
    margin: 0;
  }
  a {
    color: ${tokens.typographyColorLink};
  }

  @media (min-width: ${screenSizes.mobile}) and (max-width: 500) {
  }
`;

export default StyledFooter;
