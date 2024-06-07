import styled from '@emotion/styled';
// import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFarmInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;
  p {
    margin-bottom: 0;
  }

  @media (min - width: ${screenSizes.desktop}) {
  }
`;

const StyledButtonContainer = styled.div` 
  display: flex;
  flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 0;
    padding-top: 0;

  Select {
    width: 50%
  }
  Button {
    width: 20%;
  `;
export { StyledFarmInfo, StyledButtonContainer };
