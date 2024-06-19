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
}

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
  margin-top: -10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const StyledListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  
  @media (min-width: ${screenSizes.desktop}){
   gap: 30px;
   flex-direction: row;
   height: auto;
  }
`;
const StyledListItem = styled.div<StyledListType>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  
  h4 {
    font: ${tokens.typographyBoldBody};
  }
  p {
    font: ${tokens.typographyRegularLabel};
  }
  
  @media (min-width: ${screenSizes.desktop}){
    width: ${(props) => props.width};
    h4 {
      font: ${tokens.typographyBoldH6};
    }
    p {
      font: ${tokens.typographyRegularBody};
    }
  }
`;

const StyledFontAwesomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24spx;
  gap: 30px;
  padding-top: 10px;xx
  margin-right: 10px;

  @media (min-width: ${screenSizes.desktop}){
    padding-top: 30px;
    font-size: 32px;
  }
`;

const StyledFieldInfoList = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: ${screenSizes.desktop}){
    
  }
`;

const StyledCommentContainerDesktop = styled.div`
  display:none;  
  @media (min-width: ${screenSizes.desktop}){
    display: flex;
  }
`;

const StyledCommentContainerMobile = styled.div`
  display: flex;

  @media (min-width: ${screenSizes.desktop}){
    display: none;
  }
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
};
