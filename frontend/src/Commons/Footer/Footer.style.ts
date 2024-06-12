/**
 * @desc Styling with BC Design Tokens and Emotion for Footer component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  margin: auto 0 20px 0;
  color: ${tokens.typographyColorPlaceholder};
  font: ${tokens.typographyRegularLabel};
  p {
    margin: 0;
  }
  a {
    color: ${tokens.typographyColorLink};
  }
`;

export default StyledFooter;
