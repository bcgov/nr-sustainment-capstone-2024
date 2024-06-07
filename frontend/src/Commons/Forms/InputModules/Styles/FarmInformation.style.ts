import styled from '@emotion/styled';
// import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledFarmInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;

  @media (min - width: ${screenSizes.desktop}) {
  }
`;

export default StyledFarmInfo;
