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

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 70%;
  }
`;

const StyledFormContent = styled.div`
  width: 100%;
  color: ${tokens.typographyColorPrimary};
  border-radius: 2px;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  border: 1px solid ${tokens.themeGray40};
  padding: 0 10px 20px 10px;
  background-color: ${tokens.themeGray10};
`;

export { StyledFormContainer, StyledFormContent };
