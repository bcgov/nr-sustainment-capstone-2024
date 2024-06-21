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
import * as tokens from '@bcgov/design-tokens/js';

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
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100vw;
  justify-content: flex-end;
  @media (min-width: ${screenSizes.desktop}) {
    justify-content: flex-start;
    width: 100%;
  }
`;
const StyledButtonContainer = styled.div`
  margin-top: 20px;
  width: 50%;
  font: ${tokens.typographyRegularLabel};
`;

const StyledAddCancelButtonContainer = styled.div`
  display: flex;
  position: absolute;
  right: 17%;
  gap: 10px;
`;
const StyledNewFieldButtonContainer = styled.div`
  position: relative;
  left: 0;
  width: 100%;
`;

export {
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledButtonGroupContainer,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
};
