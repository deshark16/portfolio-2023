const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const breakpoints = {
  mobile: 480,
  tablet: 768,
  tabletLand: 992,
  desktop: 1200,
  desktopLarge: 1921,
};

export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(breakpoints.mobile),
  tablet: customMediaQuery(breakpoints.tablet),
  tabletLand: customMediaQuery(breakpoints.tabletLand),
  desktop: customMediaQuery(breakpoints.desktop),
  desktopLarge: customMediaQuery(breakpoints.desktopLarge),
};