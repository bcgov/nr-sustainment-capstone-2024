/**
 *
 * THIS IS A SKELETON!
 * THIS IS STILL TO BE IMPLEMENTED!
 *
 * @desc Styling with BC Design Tokens and Emotion for
 *       Summary Input Module
 * @author @KCaparas
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 30px;
  #linkContainer {
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: ${screenSizes.desktop}) {
    gap: 0;
    #linkContainer {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;

const StyledFarmInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;
  width: 100%;
  .label {
    font-weight: ${tokens.typographyFontWeightsBold};
  }
  .fieldRow {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export { StyledContainer, StyledFarmInfo };
