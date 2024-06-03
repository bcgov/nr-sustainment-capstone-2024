import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import { screenSizes } from '../../Constants/ScreenSize';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  max-width: 100%;
  max-height: 166px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  flex-direction: column;

  /* Tablet */
  @media (min-width: ${screenSizes.tablet}){

  }
  /* Desktop */
  @media (min-width: ${screenSizes.desktop}){
    flex-direction: row;
    background-color: ${tokens.themeBlue100};
    color: ${tokens.typographyColorPrimaryInvert};
    border-bottom: ${tokens.layoutBorderWidthMedium} solid ${tokens.themeGold100};
  }
`;

const Logo = styled.img`
  max-height: 112px;
  max-width: 123px;
  order: 2;

  /* Desktop */
  @media (min-width: ${screenSizes.desktop}){
    max-height: 123px;
    max-width: 319px;
    order: 1;
  }
`;

const Title = styled.h1`
  flex: 1;
  font-family: ${tokens.typographyFontFamiliesBcSans};
  font-weight: ${tokens.typographyFontWeightsBold};
  text-align: center;
  font-size: 32px;
  order: 1;
  margin: 50px 0 20px 0;
  line-height: 54px;

  /* Desktop */
  @media (min-width: ${screenSizes.desktop}){
    order: 2;
    font-size: 48px;
    margin: 0;
    margin-left: -20%
    line-height: 65.38px;
  }
`;

export { StyledHeader, Logo, Title };
