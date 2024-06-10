/**
 * @desc Styling with BC Design Tokens and Emotion for Farm Information Input Module
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';

const StyledFormHeader = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 51px;
  height: 100%;
  width: 100%;
  color: ${tokens.typographyColorPrimary};

  border-radius: 2px;
  border-bottom-radius: ${({ active }) => (active ? '0 0' : '2px 2px')};
  border-bottom: ${({ active }) => (active ? '0px' : '0px solid black')};
  background-color: ${({ active }) => (active ? tokens.themeGray20 : tokens.themeGray40)};

  border: 1px solid ${tokens.themeGray40};
  padding: 3px;
`;

export default StyledFormHeader;
