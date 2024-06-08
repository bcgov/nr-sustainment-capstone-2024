import styled from '@emotion/styled';
// import * as tokens from '@bcgov/design-tokens/js';
// import screenSizes from '../../Constants/ScreenSize';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export { StyledMain, StyledMainContainer };
