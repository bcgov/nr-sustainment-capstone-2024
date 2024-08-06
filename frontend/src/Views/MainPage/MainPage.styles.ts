/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Main Page of Better Berries App
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

type MainProps = {
  isHeaderVisible?: boolean;
};
const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh; // added more height, due to progress bar covering calculation module
  margin-bottom: 80px;

  @media (min-width: ${screenSizes.desktop}) {
    margin-bottom: 0;
    min-height: 100vh;
  }
`;

const StyledMainContainer = styled.div<MainProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
  margin: ${(props) => (props.isHeaderVisible ? '80px 0 50px 0' : '120px 0 50px 0')};
  padding: 0 10px;
  transition: margin 0.3s ease;

  @media (min-width: ${screenSizes.desktop}) {
    margin: 120px 0 60px 0;
    gap: 11px;
  }
`;

export { StyledMain, StyledMainContainer };
