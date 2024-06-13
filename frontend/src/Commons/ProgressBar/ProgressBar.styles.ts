import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  order: 2;
  position: fixed;
  bottom: 80px;
  background-color: #fff;
  height:100px;
  @media (min-width: ${screenSizes.desktop}) {
    height: 150px;
    width: 70%;
    top: 14%;
    order: 0;
  }
`;

const StyledProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
`;
const StyledLineBlock = styled.div`
  border: 5px solid ${tokens.surfaceColorBorderDark};
  width: 95%;
  margin-top: -60px;

  @media (min-width: ${screenSizes.desktop}) {
    border: 8px solid ${tokens.surfaceColorBorderDark};
    margin-top: -100px;
  }
`;

export { Container, StyledProgressBar, StyledLineBlock };
