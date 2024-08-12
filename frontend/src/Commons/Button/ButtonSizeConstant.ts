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
