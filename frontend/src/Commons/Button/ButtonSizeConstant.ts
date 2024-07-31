const getButtonSize = (size: string, isDesktop: boolean): string => {
  let buttonSize;

  switch (size) {
    case 'sm':
      buttonSize = '62px';
      break;
    case 'md':
      buttonSize = '178px';
      break;
    case 'lg':
      buttonSize = isDesktop ? '483px' : '322px';
      break;
    default:
      buttonSize = '100%';
      break;
  }

  return buttonSize;
};
export default getButtonSize;
