/**
 * @desc Styling with BC Design Tokens and Emotion for Form Module
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 95%;
  transition: max-height 3s ease-in-out;

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 70%;
  }
`;

const StyledFormContent = styled.div<{ isVisible: boolean }>`
  width: 100%;
  color: ${tokens.typographyColorPrimary};
  border-radius: 2px;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  padding: 0 10px 10px 10px;
  background-color: ${tokens.themeGray10};
  border: 1px solid ${tokens.themeGray40};
  max-height: ${(props) => (props.isVisible ? '2000px' : '0')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  border: ${(props) => (props.isVisible ? `1px solid ${tokens.themeGray40}` : 'none')};
  overflow: hidden;
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.2s ease-in-out,
    padding 0.2s ease-in-out;
`;

export { StyledFormContainer, StyledFormContent };
