import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 51px;
  /* max-width: 1311px; */
  height: 100%;
  width: 95%;

  @media (min-width: ${screenSizes.desktop}) {
    max-height: 51px;
    max-width: 1311px;
    max-width: 70%;
  }
`;

const StyledFormContent = styled.div`
  width: 100%;
  /* background-color: ${tokens.surfaceColorPrimaryDangerButtonDefault}; */
  color: ${tokens.typographyColorPrimary};
  border-radius: 8px;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  border: 1px solid ${tokens.typographyColorPrimary};
  /* border-top: 0; */
  padding: 10px;
  padding-bottom: 15px;
  padding-top: 0px;
  background-color: ${tokens.themeGray10};

  Button {
    position: top;
  }
`;

export { StyledFormContainer, StyledFormContent };
