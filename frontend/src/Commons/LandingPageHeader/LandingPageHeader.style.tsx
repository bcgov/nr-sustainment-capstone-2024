import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';
import desktopLogo from '/assets/BCID-logo-desktop.png';
import mobileLogo from '/assets/BCID-logo-mobile.png';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  max-width: 100vw;
  max-height: 166px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  flex-direction: column;
  width: 100%;
  margin-top: -30px;

  @media (min-width: ${screenSizes.tablet}) and (max-width: ${screenSizes.desktop}) {
    margin-top: 5vh;
    max-height: 300px;
  }
  @media (min-width: ${screenSizes.desktop}) {
    margin-top: 0;
    flex-direction: row;
    background-color: ${tokens.themeBlue100};
    color: ${tokens.typographyColorPrimaryInvert};
    border-bottom: ${tokens.layoutBorderWidthMedium} solid ${tokens.themeGold100};
  }
`;

const Logo = styled.img`
  max-height: 50vh;
  max-width: 123px;
  content: url(${mobileLogo});
  order: 2; /* Moves logo below text */

  @media (min-width: ${screenSizes.tablet}) and (max-width: ${screenSizes.desktop}) {
    max-height: 20vh;
    max-width: 20vw;
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${screenSizes.desktop}) {
    justify-content: flex-start;
    max-height: 20vh;
    max-width: 20vw;
    content: url(${desktopLogo});
    order: 1; /* Moves Logo before text */
  }
`;

const Title = styled.h1`
  flex: 1;
  font-family: ${tokens.typographyFontFamiliesBcSans}, sans-serif;
  text-align: center;
  font: ${tokens.typographyBoldH2};
  order: 1; /* Moves text above logo */
  margin: 3.5rem ${tokens.layoutMarginNone} ${tokens.layoutMarginSmall} ${tokens.layoutMarginNone};

  @media (min-width: ${screenSizes.tablet}) and (max-width: ${screenSizes.desktop}) {
    font-size: ${tokens.typographyRegularH1};
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${screenSizes.desktop}) {
    order: 2; /* Moves text after logo */
    font-size: 40px; /* Will not use token on this one. */
    margin: ${tokens.layoutMarginNone};
    position: absolute;
    left: 50vw;
    transform: translate(-50%, 0);
  }
`;

export { StyledHeader, Logo, Title };
