/**
 * @desc    Stylings for Landing Page
 * @author  @Kcaparas
 */

import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

/**
 * @description Container for the h2 and p tags that describes what the app is about.
 *              values used are almost exact as the one described in mockups.
 */
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 265px;
  max-height: 180px;
  gap: 2px;
  margin-top: 60px;
  text-align: center;

  h2 {
    font: ${tokens.typographyBoldH6};
  }

  p {
    font: ${tokens.typographyRegularSmallBody};
    color: ${tokens.typographyColorSecondary};
  }

  @media (min-width: ${screenSizes.tablet}) {
    top: 10vh;
    max-width: 350px;
    margin-top: 0;

    h2 {
      font: ${tokens.typographyBoldH5};
    }

    p {
      font: ${tokens.typographyRegularBody};
    }
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 510px;
    max-height: 270px;
    gap: 2px;
    text-align: center;

    h2 {
      font: ${tokens.typographyBoldH2};
    }

    p {
      font: ${tokens.typographyRegularLargeBody};
      color: ${tokens.typographyColorSecondary};
    }
  }
`;
/**
 * @description  Container for both Buttons and the Divider.
 */
const StyledLandingButtonGroup = styled.div`
  display: flex;
  max-width: 375px;
  max-height: 149px;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  label {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (min-width: ${screenSizes.tablet}) {
    // top: 15vh;
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 531px;
    max-height: 197px;
    height: 100%;
    top: 10vh;
  }
`;
/**
 * @description   You'll see this Divider in ListComponent and other Styles. It's not DRY
 *                but can be improved to be reused in other components.
 *                If needed specific changes, you can pass a prop and just define what's needed.
 */
const StyledDivider = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 30.61px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${tokens.typographyColorPlaceholder};

  &::before,
  &::after {
    flex: 1;
    content: '';
    padding: 1px;
    background-color: ${tokens.typographyColorPlaceholder};
    width: 145px;
    margin: 5px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    &::before,
    &::after {
      width: 225px;
    }
  }
`;

/**
 * @desc    main container of the landing page
 */
const StyledLandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 34px;
  margin-top: auto;
`;

export { StyledContent, StyledLandingButtonGroup, StyledDivider, StyledLandingContainer };
