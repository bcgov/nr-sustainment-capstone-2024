import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 20px;
`;
const StyledFieldSelect = styled.div`
  display: flex;
  @media (min-width: ${screenSizes.desktop}) {
    width: 40%;
    margin: auto;
  }
`;
const StyledGroupFormView = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
  }
`;
const StyledLeftView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${screenSizes.desktop}) {
    width: 50%;
  }
`;
const StyledRightView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font: ${tokens.typographyBoldSmallBody};
  }

  h4 {
    font: ${tokens.typographyBoldSmallBody};
  }

  @media (min-width: ${screenSizes.desktop}) {
    width: 50%;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
  }
`;

export {
  StyledFieldContainer,
  StyledFieldSelect,
  StyledGroupFormView,
  StyledLeftView,
  StyledSmallFormGroup,
  StyledRightView,
  RightListGroup,
  RightListItem,
};
