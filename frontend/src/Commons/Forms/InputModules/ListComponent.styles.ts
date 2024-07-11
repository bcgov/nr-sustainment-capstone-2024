/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Field and Soil List Component Module
 * @author @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';
import * as tokens from '@bcgov/design-tokens/js';

type StyledListType = {
  width?: string;
};

const StyledFieldInfoList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 20px;
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

  @media (min-width: ${screenSizes.desktop}) {
    font-size: 32px;
    padding-top: 20px;
    position: relative;
    right: 0;
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
};
