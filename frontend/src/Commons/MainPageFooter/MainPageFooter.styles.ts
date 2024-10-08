import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledMainFooter = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 10px;
  align-items: center;
  background-color: ${tokens.themeBlue100};
  height: 34px;
  position: fixed;
  width: 100vw;
  bottom: -1px;
  z-index: 2;
  border-top: ${tokens.layoutBorderWidthSmall} solid ${tokens.themeGold100};

  @media (min-width: ${screenSizes.desktop}) {
    display: none;
  }
`;

export default StyledMainFooter;
