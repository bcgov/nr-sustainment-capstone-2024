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
    gap: 6px;
    #plantsPerHaLabel {
      display: flex;
      gap: 10px;
      h4 {
        margin: 0;
        font: ${tokens.typographyBoldSmallBody};
      }

      @media (min-width: ${screenSizes.desktop}) {
        h4 {
          font: ${tokens.typographyBoldLargeBody};
        }
      }
    }
    p {
      margin: 0;
      font: ${tokens.typographyRegularLabel};
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
`;

const StyledNoCropsInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px 11px 0 11px;
  h3 {
    font: ${tokens.typographyBoldH6};
  }
`;

const StyledAreaContainer = styled.div`
  display: flex;
  gap: 4px;
  @media (min-width: ${screenSizes.desktop}) {
  }
`;
export {
  StyledCropsSmallGroup,
  StyledCropsLargeGroup,
  StyledAddCancelButtonGroup,
  StyledNoCropsInfoContainer,
  StyledAreaContainer,
};
