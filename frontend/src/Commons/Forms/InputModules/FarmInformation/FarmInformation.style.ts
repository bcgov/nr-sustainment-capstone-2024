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
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (min-width: ${screenSizes.desktop}) {
      flex-direction: row;
      width: 50%;
      gap: 32px;
    }
  }

  @media (min-width: ${screenSizes.desktop}) {
    gap: 25px;
  }
`;

const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const StyledButtonController = styled.div`
  width: 100%;
  max-width: 327px;
  height: 42px;
  margin: auto;

  @media (min-width: ${screenSizes.desktop}) {
    margin: 0;
    max-width: 67px;
  }
`;
export { StyledFarmInfo, StyledSelectContainer, StyledButtonController };
