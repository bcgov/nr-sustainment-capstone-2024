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

type StyledListType = {
  width?: string;
};

const StyledFarmInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;
  gap: 20px;

  #inputContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: ${screenSizes.desktop}) {
      flex-direction: row;
      width: 50%;
      gap: 30px;
    }
  }
`;

const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 30px;

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100vw;
  justify-content: flex-end;
  @media (min-width: ${screenSizes.desktop}) {
    justify-content: flex-start;
    width: 100%;
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

const StyledFieldInfoList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: ${screenSizes.desktop}) {
  }
`;

const StyledCommentContainerDesktop = styled.div`
  display: none;
  @media (min-width: ${screenSizes.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledCommentContainerMobile = styled.div`
  display: flex;

  @media (min-width: ${screenSizes.desktop}) {
    display: none;
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
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledButtonGroupContainer,
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
