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
  width?: string;
};

const StyledFieldInfoList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledListContainer = styled.div<FormProps>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.formNutrients ? 'column' : 'row')};
  padding-top: 20px;
  gap: ${(props) => (props.formCrops ? '50px' : '20px')};

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
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
  max-width: ${(props) => props.width};

  h2 {
    font: ${tokens.typographyBoldBody};
  }
  .CropsList {
    display: flex;
    gap: 5px;
  }
  @media (min-width: ${screenSizes.desktop}) {
    .smallItems {
      width: 200%;
      padding: 0 50px;
    }
    h2 {
      font: ${tokens.typographyBoldH6};
    }
  }
`;
const StyledFontAwesomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  gap: 30px;
  margin-right: 10px;
  padding-top: 8px;
  position:absolute;
  right: 0;

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

const StyledListItemGroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
  }
`;

const StyledListItemGroup = styled.div`
  display: flex;
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
`;

export {
  StyledListContainer,
  StyledListItem,
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
};
