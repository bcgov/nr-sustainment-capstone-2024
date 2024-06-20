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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100%;
  width: 100%;
  gap: 30px;
`;

const StyledFarmInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;
  width: 100%; /*Can be removed to center content */
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
