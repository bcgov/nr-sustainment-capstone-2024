/**
 *
 * THIS IS A SKELETON!
 * THIS IS STILL TO BE IMPLEMENTED!
 *
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

const StyledButtonGroupContainer = styled.div`
  margin-top: -10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export {
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledButtonGroupContainer,
  StyledListContainer,
  StyledListItem,
};
