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
    max-width: 1311px;
  }
`;

const StyledFormContent = styled.div`
  width: 100%;
  color: ${tokens.typographyColorPrimary};
  border-radius: 2px;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  padding: 0 10px 15px 10px;
  border: 1px solid ${tokens.surfaceColorBorderDefault};
  background-color: ${tokens.themeGray10};
`;

export { StyledFormContainer, StyledFormContent };
