import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

const StyledCropsSmallGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100vw;

  @media (min-width: ${screenSizes.desktop}) {
    width: 50vw;
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
/* Will figure out a way to make this dry */
const StyledAreaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: auto;
  position: relative;

  p {
    position: relative;
    top: 35px;
    left: 5px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    p {
      bottom: 20px;
    }
  }
`;

const StyledAddCancelButtonGroup = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`;
export {
  StyledCropsSmallGroup,
  StyledCropsLargeGroup,
  StyledAreaContainer,
  StyledAddCancelButtonGroup,
};
