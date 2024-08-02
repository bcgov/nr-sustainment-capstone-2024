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
  width: 100vw;
  order: 2;
  position: sticky;
  bottom: 30px;
  background-color: #fff;
  height: 80px;
  padding: 0 13px 30px 13px;
  z-index: 1;
  border-top: 2px solid ${tokens.surfaceColorBorderDefault};
  transition: 0.3s ease-in-out;
  @media (min-width: ${screenSizes.desktop}) {
    padding-bottom: 50px;
    height: 150px;
    top: ${(props) => (props.isHeaderVisible ? '85px' : '0')};
    border-top: 0;
    border-bottom: 2px solid ${tokens.surfaceColorBorderDefault};
    order: 0;
  }
`;

const StyledProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1311px;
  z-index: 1;
`;
const StyledLineBlock = styled.div`
  border: 4px solid ${tokens.surfaceColorBorderDark};
  width: 85%;
  margin-top: -60px;
  z-index: 0;

  @media (min-width: ${screenSizes.desktop}) {
    border: 8px solid ${tokens.surfaceColorBorderDark};
    width: 90%;
    max-width: 1100px;
    margin-top: -100px;
  }
`;

export { Container, StyledProgressBar, StyledLineBlock };
