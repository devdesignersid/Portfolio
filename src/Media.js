import { createMedia } from "@artsy/fresnel";

const QueryBreakPoints = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

export const mediaStyles = QueryBreakPoints.createMediaStyle();
export const { Media, MediaContextProvider } = QueryBreakPoints;
