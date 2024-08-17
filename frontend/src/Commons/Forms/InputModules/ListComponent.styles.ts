/**
 * @desc Styling with BC Design Tokens and Emotion for List Components
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

const StyledListMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledFieldsFormList = styled.div<StyledListType>`
    display: flex;
    flex-direction: column;
    gap: 24px;
    &:not(:first-of-type) {
      border-top: 1px solid #d8d8d8;
      padding-top: 24px;
    }
  }
`;
const StyledFieldsFormListContainer = styled.div<StyledListType>`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap};
  align-items: flex-start;
`;

/**
 * @description   Reused in every Form modules' List Components
 */
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

  /* Container for Crops in row; mobile or desktop. */
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

/**
 * @description   Reused in both Fields and Fertilizers. Container for font-awesome icons.
 *                Gives spacing, and allows to be spaced on the right side of the container
 *                Note: Postion absolute will break the spacing between field comments and this div.
 *                This container will be on top of the fields comments if done so.
 */
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

/**
 * @description   Quick and Dirty response to elegant design of the designer.
 *                Comments should be below FieldName and Area on mobile.
 *                While on desktop, Comments are aligned with them.
 *
 */
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

/**
 * @description Can be improved, can be replaced by hr tag or border-bottom.
 */
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
  margin: ${(props) => (props.formCalc ? '0' : '24px 0 0 0')}; // gives margin-top on first divider
`;

const StyledFieldTestGroup = styled.div<StyledListType>`
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
  StyledListMainContainer,
  StyledListItem,
  StyledFieldsFormList,
  StyledFontAwesomeContainer,
  StyledFieldsFormListContainer,
  StyledCommentContainerDesktop,
  StyledCommentContainerMobile,
  StyledDivider,
  StyledFieldTestGroup,
  StyledListItemGroup,
  StyledCropsGroup,
  StyledCustomFertilizerGroup,
};
