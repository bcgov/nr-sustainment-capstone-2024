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

/**
 * @description   Main Container for the Main Page.
 */
const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-bottom: 80px;

  @media (min-width: ${screenSizes.desktop}) {
    margin-bottom: 0;
    min-height: 100vh;
  }
`;

/**
 * @description  Container for each Form Modules.
 */
const StyledFormModuleContainer = styled.div<MainProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
  margin: ${(props) => (props.isHeaderVisible ? '80px 0 50px 0' : '120px 0 50px 0')};
  padding: 0 10px;
  transition: margin 0.3s ease;

  @media (min-width: ${screenSizes.desktop}) {
    margin: 150px 0 60px 0;
    gap: 11px;
  }
`;

export { StyledMainContainer, StyledFormModuleContainer };
