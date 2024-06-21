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

  p {
    font: ${tokens.typographyRegularSmallBody};
    color: ${tokens.typographyColorSecondary};
    text-align: center;
    padding: 0 54px 0 54px;
    margin-bottom: 0;
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

export { StyledContent, StyledLandingContainer };
