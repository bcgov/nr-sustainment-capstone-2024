/**
 *
 * @param size              accepts 'sm' | 'md' | 'lg'
 * @param isDesktop         accepts true or false
 * @param landingPageButton accepts true or false
 * @param addButton         accepts true or false
 *                          this is for buttons with faPlus
 * @param fertilizerButton  accepts true or false
 *                          only for save fertilizer button
 * @param calcAddFertButton accepts true or false
 *                          only for add fertilizer button in calculate nutrients
 * @param returnToCalc      accepts true or false
 * @returns                 return buttonSize based on mockups.
 * @description             A helper function to set the DIFFERENT button sizes
 * @author                  @Kcaparas
 */

const getButtonSize = (
  size: string,
  isDesktop: boolean,
  landingPageButton: boolean | undefined,
  addButton: boolean | undefined,
  fertilizerButton: boolean | undefined,
  calcAddFertButton: boolean | undefined,
  returnToCalc: boolean | undefined,
): string => {
  let buttonSize;
  let largeButtonSize;

  if (landingPageButton) {
    largeButtonSize = '483px';
  } else if (addButton) {
    largeButtonSize = '200px';
  } else if (calcAddFertButton) {
    largeButtonSize = '240px';
  } else if (fertilizerButton) {
    largeButtonSize = '140px';
  } else if (returnToCalc) {
    largeButtonSize = '516px';
  } else {
    largeButtonSize = '62px';
  }
  switch (size) {
    case 'sm':
      buttonSize = '62px';
      break;
    case 'md':
      buttonSize = isDesktop ? '209px' : '139px';
      break;
    case 'lg':
      buttonSize = isDesktop ? largeButtonSize : '322px';
      break;
    default:
      buttonSize = '100%';
      break;
  }

  return buttonSize;
};
export default getButtonSize;
