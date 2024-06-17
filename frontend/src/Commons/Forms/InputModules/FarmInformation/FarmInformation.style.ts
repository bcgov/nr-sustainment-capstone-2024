/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Farm Information Input Module
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

const StyledFarmInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;

  #inputContainer {
    @media (min-width: ${screenSizes.desktop}) {
      display: flex;
      flex-direction: row;
      width: 50%;
    }
  }
`;

const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export { StyledFarmInfo, StyledSelectContainer };
