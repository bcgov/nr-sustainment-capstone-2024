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

  #inputContainer {
    @media (min-width: ${screenSizes.desktop}) {
      display: flex;
      flex-direction: row;
      width: 50%;
      gap: 30px;
    }
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0;
  padding-top: 0;

  Select {
    height: 30px;
    width: 80%;
  }
`;
export { StyledFarmInfo, StyledButtonContainer };
