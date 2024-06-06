import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFormHeader = styled.button<{ clicked: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 51px;
  max-width: 1311px;
  height: 100%;
  width: 100%;
  background-color: ${({ clicked }) => (clicked ? tokens.themeGray20 : tokens.themeGray40)};
  color: ${tokens.typographyColorPrimary};
  border-radius: 3px;
  border: 1px solid black;
  padding: 3px;

  @media (min - width: ${screenSizes.desktop}) {
    max-height: 51px;
    max-width: 1311px;
  }
`;

export default StyledFormHeader;
