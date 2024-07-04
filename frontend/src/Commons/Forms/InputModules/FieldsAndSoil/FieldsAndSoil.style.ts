/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Field and Soil Input Module
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

const StyledFarmInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;
  gap: 20px;

  #inputContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: ${screenSizes.desktop}) {
      flex-direction: row;
      width: 50%;
      gap: 30px;
    }
  }
`;

const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 30px;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledAreaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: auto;
  position: relative;

  p {
    position: absolute;
    top: 30px;
    left: 100px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    p {
      left: 110px;
    }
  }
`;
const StyledButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  width: 320px;
  justify-content: flex-end;
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    margin: 0;
    justify-content: flex-start;
    width: 67px;
  }
`;

export { StyledFarmInfo, StyledTextAreaContainer, StyledAreaContainer, StyledButtonGroupContainer };
