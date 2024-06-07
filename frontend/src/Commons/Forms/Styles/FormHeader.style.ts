import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFormHeader = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 51px;
  max-width: 1311px;
  height: 100%;
  width: 100%;
  background-color: ${({ active }) => (active ? tokens.themeGray20 : tokens.themeGray40)};
  color: ${tokens.typographyColorPrimary};
  border-radius: 3px;
  border-bottom-left-radius: ${({ active }) => (active ? '0' : '3px')};
  border-bottom-right-radius: ${({ active }) => (active ? '0' : '3px')};
  border-bottom: ${({ active }) => (active ? '0px' : '0px solid black')};

border: 1px solid black;
padding: 3px;

@media(min - width: ${screenSizes.desktop}) {
  max - height: 51px;
  max - width: 1311px;
}
`;

export default StyledFormHeader;
