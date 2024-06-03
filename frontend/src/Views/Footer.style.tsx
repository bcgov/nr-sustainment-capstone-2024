import styled from '@emotion/styled';
import * as tokens from "@bcgov/design-tokens/js";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  min-height: 50px;
  margin-top: 20px;
  margin: 0px;
  color: ${tokens.typographyColorPlaceholder};
  a {
      color: ${tokens.typographyColorLink};
    }
`;

export default StyledFooter;
