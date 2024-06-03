/**
 * @desc Styling with BC Design Tokens and Emotion for Footer component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
    max-width: 320px;
  color: ${tokens.typographyColorPlaceholder};
  font-size: ${tokens.typographyRegularLabel};
  margin-bottom: 36px;
  p {
    margin: 0;
  }
  a {
    color: ${tokens.typographyColorLink};
  }
`;

export default StyledFooter;
