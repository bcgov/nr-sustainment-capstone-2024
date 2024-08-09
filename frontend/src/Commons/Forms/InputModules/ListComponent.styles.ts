/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Field and Soil List Component Module
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';
import { FormProps } from 'src/Types/FormProps';

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
      border-top: 1px solid #d8d8d8;
      padding-top: 24px;
    }
  }
`;
const StyledListContainer = styled.div<StyledListType>`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap};
  align-items: flex-start;
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
  overflow-wrap: anywhere;
  h2 {
    font: ${tokens.typographyBoldBody};
  }
  p {
    font: ${tokens.typographyRegularLabel};
  }
  .CropsList {
    display: flex;
    width: 100%;
    gap: 5px;
  }
  @media (min-width: ${screenSizes.desktop}) {
    max-width: ${(props) => props.desktopWidth};
    margin-right: ${(props) => props.marginRight};
    h2 {
      font: ${tokens.typographyBoldLargeBody};
    }
    p {
      font: ${tokens.typographyRegularBody};
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
  margin: -20px 0 -16px 0;
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

const StyledDivider = styled.div<FormProps>`
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
  // Same as Mockups
  background-color: #d8d8d8;
  width: 100%;
  margin: 24px 0 0 0;
`;

const StyledListItemGroupContainer = styled.div<StyledListType>`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  gap: 24px;
  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    flex-flow: row wrap;
    width: 100%;
    gap: 0;
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
  width: 100%;
  gap: 65px;

  @media (min-width: ${screenSizes.desktop}) {
    gap: 110px;
  }
`;

const StyledCustomFertilizerGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  justify-content: space-between;
  padding: 0 8px 0 14px;

  @media (min-width: ${screenSizes.desktop}) {
    padding: 0;
    justify-content: flex-start;
    width: 75%;
    gap: 24px;
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
