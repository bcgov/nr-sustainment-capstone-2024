import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '../../Constants/ScreenSize';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 265px;
  max-height: 180px;
  top: 15vh;
  gap: 2px;
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
    top: 10vh;
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

const StyledButtonGroup = styled.div`
  display: flex;
  max-width: 375px;
  max-height: 149px;
  width: 100%;
  flex-direction: column;
  gap: 2px;
  top: 20vh;
  align-items: center;

  @media (min-width: ${screenSizes.tablet}) {
    top: 15vh;
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 531px;
    max-height: 197px;
    top: 15vh;
  }
`;

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
    width: 130px;
    margin: 5px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    &::before,
    &::after {
      width: 200px;
    }
  }
`;

const StyledLandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: auto;
  gap: 40px;
`;

export { StyledContent, StyledButtonGroup, StyledDivider, StyledLandingContainer };
