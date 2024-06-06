import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '../../Constants/ScreenSize';

const StyledFormHeader = styled.button`
  display: flex;
  justify-content: space-between;
  max-height: 51px;
  max-width: 1311px;
  height: 100%;
  width: 100%;
  background-color: ${tokens.surfaceColorPrimaryButtonDisabled};
  color: ${tokens.typographyColorPrimary};
  border-radius: 8px;
  border: 0;
  padding: 10px;
  font-family: ${tokens.typographyFontFamiliesBcSans};
  font-weight: ${tokens.typographyFontWeightsBold};

  @media (min-width: ${screenSizes.desktop}) {
    max-height: 51px;
    max-width: 1311px;
  }
`;

export default StyledFormHeader;
