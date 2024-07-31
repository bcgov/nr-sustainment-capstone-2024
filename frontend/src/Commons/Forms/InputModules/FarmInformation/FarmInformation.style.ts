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
  gap: 24px;

  #inputContainer {
    @media (min-width: ${screenSizes.desktop}) {
      display: flex;
      flex-direction: row;
      width: 50%;
      gap: 30px;
    }
  }

  @media (min-width: ${screenSizes.desktop}) {
    gap: 0;
  }
`;

const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const StyledButtonController = styled.div`
  width: 100%;
  max-width: 327px;
  height: 42px;

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 67px;
  }
`;
export { StyledFarmInfo, StyledSelectContainer, StyledButtonController };
