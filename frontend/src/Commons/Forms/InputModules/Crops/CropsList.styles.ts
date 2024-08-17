/**
 * @description   Styling for the Crops List Component.
 * @author        @Kcaparas
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

/**
 * @description   Main Container of the Crops List
 * @prop {boolean} isFirstChild - a prop to be passed to indicate if it's the first item on the list.
 */
const StyledCropInfoList = styled.div<{ isFirstChild?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  //  Only applies border-top and margin-top if it's not the first item in the list.
  ${({ isFirstChild }) =>
    !isFirstChild &&
    `border-top: 1px solid #d8d8d8; 
     margin-top: 24px;
    `}
`;

/**
 *    @description    Container for the list items.
 */
const StyledListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 4px;
  align-items: flex-start;

  .CropsList {
    align-items: flex-start;
    button {
      margin-top: 1px;
    }
  }

  @media (min-width: ${screenSizes.desktop}) {
    flex-direction: row;
    gap: 110px;
  }
`;

export { StyledListContainer, StyledCropInfoList };
