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
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
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
