import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFormModule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 51px;
  max-width: 1311px;
  height: 100%;
  width: 95%;
  /* background-color: ${tokens.surfaceColorPrimaryDangerButtonDefault}; */
  color: ${tokens.typographyColorPrimary};
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border: 1px solid ${tokens.typographyColorPrimary};
  border-top: 0;
  padding-bottom: 200px;
  padding-top: 15px;

  @media (min - width: ${screenSizes.desktop}) {
    max-height: 51px;
    max-width: 1311px;
  }
`;

export default StyledFormModule;
