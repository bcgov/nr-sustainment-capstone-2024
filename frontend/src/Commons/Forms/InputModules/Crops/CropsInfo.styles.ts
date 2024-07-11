import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

const StyledCropsSmallGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  @media (min-width: ${screenSizes.desktop}) {
    justify-content: flex-start;
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
  margin-left: 5px;
  p {
    position: relative;
    top: 25px;
    left: 5px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    margin-left: 0;
    p {
      top: 35px;
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
