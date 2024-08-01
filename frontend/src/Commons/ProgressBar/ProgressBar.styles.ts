import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type ProgressBarProps = {
  isHeaderVisible: boolean;
};

const Container = styled.div<ProgressBarProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 800px;
  order: 2;
  position: sticky;
  bottom: 30px;
  background-color: #fff;
  height: 80px;
  padding-bottom: 30px;
  z-index: 1;
  transition: 0.3s ease-in-out;
  @media (min-width: ${screenSizes.desktop}) {
    padding-bottom: 50px;
    height: 150px;
    width: 80%;
    max-width: 1400px;
    top: ${(props) => (props.isHeaderVisible ? '85px' : '0')};
    border-bottom: 2px solid ${tokens.themeGray40};
    order: 0;
  }
`;

const StyledProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;
const StyledLineBlock = styled.div`
  border: 5px solid ${tokens.surfaceColorBorderDark};
  width: 90%;
  margin-top: -60px;

  @media (min-width: ${screenSizes.desktop}) {
    border: 8px solid ${tokens.surfaceColorBorderDark};
    margin-top: -100px;
  }
`;

export { Container, StyledProgressBar, StyledLineBlock };
