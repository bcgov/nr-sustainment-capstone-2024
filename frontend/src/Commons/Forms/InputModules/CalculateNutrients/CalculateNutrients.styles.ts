/**
 * @description   Styling for Calculate Nutrients.
 * @author        @Kcaparas
 */

import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

const StyledFieldSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 20px;
`;
const StyledFieldSelect = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (min-width: ${screenSizes.desktop}) {
    margin-top: 13px;
  }
`;
const StyledGroupFormView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  align-items: center;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    gap: 250px;
  }
`;
const StyledLeftView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 477px;
    margin-left: 89px;
  }
`;
const StyledRightView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 322px;
  h3 {
    font: ${tokens.typographyBoldSmallBody};
  }

  h4 {
    font: ${tokens.typographyBoldSmallBody};
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 240px;
    h3 {
      font: ${tokens.typographyBoldLargeBody};
    }

    h4 {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;

const RightListGroup = styled.div`
  display: flex;
  gap: 50px;
`;
const RightListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const StyledSmallFormGroup = styled.div`
  width: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    gap: 53px;
  }
`;

export {
  StyledFieldSelectContainer,
  StyledFieldSelect,
  StyledGroupFormView,
  StyledLeftView,
  StyledSmallFormGroup,
  StyledRightView,
  RightListGroup,
  RightListItem,
};
