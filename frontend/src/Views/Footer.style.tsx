import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
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
