/**
 * @desc Styling with BC Design Tokens and Emotion for Farm Information Input Module
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFormHeader = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 51px;
  height: 100%;
  width: 100%;
  color: ${tokens.typographyColorPrimary};

  border-radius: 2px;
  border-bottom-radius: ${({ active }) => (active ? '0' : '2px 2px')};
  border-bottom: ${({ active }) => (active ? '0' : '0px solid black')};
  background-color: ${({ active }) => (active ? tokens.themeGray20 : tokens.themeGray40)};

  border: 1px solid ${tokens.themeGray40};
  padding: 3px;

  h2 {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  @media (min-width: ${screenSizes.desktop}) {
    h2 {
      font-size: 18px;
      padding: 0;
      margin: 0;
    }
  }
`;

export default StyledFormHeader;
