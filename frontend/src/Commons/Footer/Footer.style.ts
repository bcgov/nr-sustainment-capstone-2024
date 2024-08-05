/**
 * @desc Styling with BC Design Tokens and Emotion for Footer component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  margin: auto 0 20px 0;
  color: ${tokens.typographyColorPlaceholder};
  font: ${tokens.typographyRegularSmallBody};
  line-height: 21px;
  p {
    margin: 0;
  }
  a {
    color: ${tokens.typographyColorLink};
  }

  @media (min-width: ${screenSizes.desktop}) {
    font: ${tokens.typographyRegularLargeBody};
    line-height: 30.61px;
  }
`;

export default StyledFooter;
