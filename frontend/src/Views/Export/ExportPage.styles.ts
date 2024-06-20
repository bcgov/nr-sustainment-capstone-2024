import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: 50px 0 30px 0;
  top: 15vh;
  gap: 10px;
  padding: 0 0 20px 0;
  border: 1px solid ${tokens.themeGray40};
  #dataFileHeader {
    display: flex;
    text-align: center;
    width: 100%;
    height: 51px;
    background-color: ${tokens.themeGray10};
    border: 1px solid ${tokens.themeGray40};
    font: ${tokens.typographyBoldH6};
    justify-content: center;
    align-items: center;
  }

  h6 {
    margin-bottom: 0;
  }

  p {
    font: ${tokens.typographyRegularSmallBody};
    color: ${tokens.typographyColorSecondary};
    text-align: center;
    padding: 0 54px 0 54px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 40%;
    min-height: 40%;
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
  align-items: center;

  label {
    display: flex;
    justify-content: center;
    width: 100%;
  }
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
  height: 100vh;
  margin-top: auto;
  gap: 40px;
`;

export { StyledContent, StyledButtonGroup, StyledDivider, StyledLandingContainer };
