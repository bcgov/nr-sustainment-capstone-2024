import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';
import desktopLogo from '/assets/BCID-logo-desktop.png';
import mobileLogo from '/assets/BCID-MainMobile-logo.png';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  max-width: 100vw;
  max-height: 87px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  background-color: ${tokens.themeBlue100};
  position:fixed;
  top:0;
  color: ${tokens.typographyColorPrimaryInvert};
  border-bottom: ${tokens.layoutBorderWidthMedium} solid ${tokens.themeGold100};
  @media (min-width: ${screenSizes.tablet}) and (max-width: ${screenSizes.desktop}) {
    max-height: 100px;
  }
  @media (min-width: ${screenSizes.desktop}) {
    height: 450px;
  }
`;

const Logo = styled.img`
  max-height: 69.29px;
  max-width: 76px;
  margin-left: 10px;
  content: url(${mobileLogo});
  @media (min-width: ${screenSizes.tablet}) and (max-width: ${screenSizes.desktop}) {
    max-height: 80px;
    max-width: 80px;
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${screenSizes.desktop}) {
    max-height: 123px;
    max-width: 250px;
    margin-left: 14%;
    content: url(${desktopLogo});
  }
`;

const Title = styled.h1`
  flex: 1;
  font-family: ${tokens.typographyFontFamiliesBcSans}, sans-serif;
  font: ${tokens.typographyBoldH4};
  margin: 15px 0 0 15px;
  @media (min-width: ${screenSizes.tablet}) and (max-width: ${screenSizes.desktop}) {
    font-size: ${tokens.typographyRegularH1};
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${screenSizes.desktop}) {
    font-size: 40px; /* Will not use token on this one. */
    margin: ${tokens.layoutMarginNone};
    position: absolute;
    left: 50vw;
    transform: translate(-50%, 0);
  }
`;

export { StyledHeader, Logo, Title };
