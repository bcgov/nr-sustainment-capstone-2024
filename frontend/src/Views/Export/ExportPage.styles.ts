import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledLandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: auto;
  gap: 40px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: 50px 0 30px 0;
  top: 15vh;
  gap: 24px;
  padding: 0 0 24px 0;
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

  p {
    font: ${tokens.typographyRegularSmallBody};
    color: ${tokens.typographyColorSecondary};
    text-align: center;
    padding: 0 54px 0 54px;
    margin-bottom: 0;
  }

  h2 {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 516px;
    gap: 24px;
    top: 10vh;
    text-align: center;

    h2 {
      font-size: 18px;
    }

    p {
      font: ${tokens.typographyRegularLargeBody};
      color: ${tokens.typographyColorSecondary};
    }
  }
`;

const ParagraphContainer = styled.p`
  display: flex;
  gap: 10px;
  font: ${tokens.typographyRegularSmallBody};
  color: ${tokens.typographyColorSecondary};
  text-align: center;
  padding: 0 54px 0 54px;
  margin-bottom: 0;

  @media (min-width: ${screenSizes.desktop}) {
    font: ${tokens.typographyRegularLargeBody};
    color: ${tokens.typographyColorSecondary};
  }
`;

export { StyledContent, StyledLandingContainer, ParagraphContainer };
