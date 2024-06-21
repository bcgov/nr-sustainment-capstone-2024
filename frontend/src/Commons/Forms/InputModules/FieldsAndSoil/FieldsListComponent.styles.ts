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
  @media (min-width: ${screenSizes.desktop}) {
  }
`;

const StyledListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 20px;
  @media (min-width: ${screenSizes.desktop}) {
  }
`;

const StyledListItem = styled.div<StyledListType>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${(props) => props.width};

  h4 {
    font: ${tokens.typographyBoldBody};
  }
  @media (min-width: ${screenSizes.desktop}) {
    h4 {
      font: ${tokens.typographyBoldH6};
    }
  }
`;
const StyledFontAwesomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24spx;
  gap: 30px;
  margin-right: 10px;
  padding-top: 8px;

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

  @media (min-width: ${screenSizes.desktop}) {
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
  right: 0;
  gap: 10px;
`;
const StyledNewFieldButtonContainer = styled.div`
  position: relative;
  left: 0;
  width: 100%;
`;

export {
  StyledListContainer,
  StyledListItem,
  StyledFontAwesomeContainer,
  StyledFieldInfoList,
  StyledCommentContainerDesktop,
  StyledCommentContainerMobile,
  StyledDivider,
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
};
