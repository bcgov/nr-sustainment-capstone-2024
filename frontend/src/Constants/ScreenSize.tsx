const screenSizes = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
} as const;
export { screenSizes };
export type ScreenSizes = typeof screenSizes;
