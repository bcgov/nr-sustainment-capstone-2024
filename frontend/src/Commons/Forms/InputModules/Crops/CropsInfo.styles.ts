import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

const StyledCropsSmallGroup = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  align-items: center;
  @media (min-width: ${screenSizes.desktop}) {
    justify-content: flex-start;
    width: 50vw;
  }

  #plantsPerHa {
    display: flex;
    flex-direction: column;
    height: 100%;
    #plantsPerHaLabel {
      font: ${tokens.typographyBoldSmallBody};
    }
    p {
      margin: 0;
      font: ${tokens.typographyRegularLabel};
    }
    @media (min-width: ${screenSizes.desktop}) {
      #plantsPerHaLabel {
        font: ${tokens.typographyBoldLargeBody};
      }
    }
  }
`;
const StyledCropsLargeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100vw;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    width: 50vw;
  }
`;

const StyledAddCancelButtonGroup = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 50px;

  @media (min-width: ${screenSizes.desktop}) {
    margin-bottom: 0;
  }
`;

const StyledNoCropsInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  h3 {
    font: ${tokens.typographyBoldH6};
  }
`;

const StyledAreaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: auto;
  position: relative;
  p {
    position: relative;
    top: 25px;
    left: 10px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    margin-left: 0;
    p {
      top: 25px;
    }
  }
`;
export {
  StyledCropsSmallGroup,
  StyledCropsLargeGroup,
  StyledAddCancelButtonGroup,
  StyledNoCropsInfoContainer,
  StyledAreaContainer,
};
