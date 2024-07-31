import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';
import desktopLogo from '/assets/BCID-logo-desktop.png';

type HeaderProps = {
  isHeaderVisible: boolean;
};
const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  max-width: 100vw;
  max-height: 65px;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  background-color: ${tokens.themeBlue100};
  position: fixed;
  top: 0;
  z-index: 2;
  color: ${tokens.typographyColorPrimaryInvert};
  box-sizing: border-box;
  transition: transform 0.5s ease-in-out;
  border-bottom: ${tokens.layoutBorderWidthMedium} solid ${tokens.themeGold100};
  transform: translateY(${(props) => (props.isHeaderVisible ? '0' : '-100%')});
  @media (min-width: ${screenSizes.desktop}) {
    max-height: 87px;
    height: 450px;
  }
`;

const Logo = styled.img`
  max-height: 123px;
  max-width: 150px;
  content: url(${desktopLogo});
  @media (min-width: ${screenSizes.desktop}) {
    max-height: 123px;
    max-width: 250px;
    margin-left: 14%;
    content: url(${desktopLogo});
  }
`;

const Title = styled.h1`
  font-family: ${tokens.typographyFontFamiliesBcSans}, sans-serif;
  font: ${tokens.typographyBoldH4};
  margin: auto;
  position: absolute;
  left: 90%;
  transform: translateX(-90%);
  width: 50%;
  @media (min-width: ${screenSizes.desktop}) {
    font-size: 40px; /* Will not use token on this one. */
    margin: ${tokens.layoutMarginNone};
    left: 80vw;
    transform: translate(-80%, 0);
  }
`;

const ToggleContainer = styled.div`
  display: none;
  @media (min-width: ${screenSizes.desktop}) {
    display: flex;
    gap: 10px;
    position: absolute;
    left: calc(100vw - 2%);
    transform: translateX(-100%);
  }
`;

export { StyledHeader, Logo, Title, ToggleContainer };
