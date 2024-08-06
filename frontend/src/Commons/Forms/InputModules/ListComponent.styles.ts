/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Field and Soil List Component Module
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

type StyledListType = {
  desktopWidth?: string;
  mobileWidth?: string;
  marginRight?: string;
  gap?: string;
  fieldCount?: number;
};

const StyledFieldInfoList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledList = styled.div<StyledListType>`
  display: flex;
  flex-direction: column;
    gap: 24px;

    &:not(:first-of-type) {
    border-top: 2px solid ${tokens.typographyColorPlaceholder};
    }
  }
`;
const StyledListContainer = styled.div<StyledListType>`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: ${(props) => props.gap};
  align-items: flex-start;

  @media (min-width: ${screenSizes.desktop}) {
    flex-wrap: nowrap;
  }
`;

const StyledFieldNameContainer = styled.div`
  width: 120px;

  @media (min-width: ${screenSizes.desktop}) {
    width: 160px;
  }
`;

const StyledListItem = styled.div<StyledListType>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: ${(props) => props.mobileWidth};
  flex-wrap: nowrap;
  h2 {
    font: ${tokens.typographyBoldBody};
  }
  .CropsList {
    display: flex;
    gap: 5px;
  }
  @media (min-width: ${screenSizes.desktop}) {
    max-width: ${(props) => props.desktopWidth};
    margin-right: ${(props) => props.marginRight};
    h2 {
      font: ${tokens.typographyBoldLargeBody};
    }
  }
`;
const StyledFontAwesomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  gap: 24px;
  margin-right: 10px;
  padding-top: 8px;
  margin-left: auto;

  @media (min-width: ${screenSizes.desktop}) {
    font-size: 32px;
    padding-top: 20px;
  }
`;
const StyledCommentContainerMobile = styled.div`
  display: flex;
  @media (min-width: ${screenSizes.desktop}) {
    display: none;
  }
`;

const StyledCommentContainerDesktop = styled.div`
  display: none;
  @media (min-width: ${screenSizes.desktop}) {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
  }
`;

const StyledDivider = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 30.61px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${tokens.typographyColorPlaceholder};
  flex: 1;
  content: '';
  padding: 1px;
  background-color: ${tokens.typographyColorPlaceholder};
  width: 100%;
  margin: auto;
`;

const StyledListItemGroupContainer = styled.div<StyledListType>`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    flex-flow: row wrap;
    width: 100%;
  }
`;

const StyledListItemGroup = styled.div<StyledListType>`
  display: flex;
  gap: 50px;

  @media (min-width: ${screenSizes.desktop}) {
    gap: 0;
    box-sizing: border-box;
    width: ${(props) => props.desktopWidth};
  }
`;

const NutrientsFieldListGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
  }
`;

const StyledCropsGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: ${screenSizes.desktop}) {
    flex-wrap: nowrap;
    gap: 50px;
  }
`;

const StyledCustomFertilizerGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 30px;
  margin-left: 20px;

  @media (min-width: ${screenSizes.desktop}) {
    width: 300px;
    margin-left: 0;
  }
`;

export {
  StyledListContainer,
  StyledListItem,
  StyledList,
  StyledFontAwesomeContainer,
  StyledFieldInfoList,
  StyledCommentContainerDesktop,
  StyledCommentContainerMobile,
  StyledDivider,
  StyledListItemGroupContainer,
  StyledListItemGroup,
  StyledCropsGroup,
  StyledCustomFertilizerGroup,
  StyledFieldNameContainer,
  NutrientsFieldListGroup,
};
