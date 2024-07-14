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

const StyledAddCancelButtonGroup = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 50px;

  @media (min-width: ${screenSizes.desktop}){
    margin-bottom: 0;
  }
`;
export { StyledCropsSmallGroup, StyledCropsLargeGroup, StyledAddCancelButtonGroup };
