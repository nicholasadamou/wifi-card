import { createGlobalStyle } from 'styled-components'

import RobotoSlabLight_Web from './Roboto-Slab/woff2/RobotoSlab-Light.woff2'
import RobotoSlabThin_Web from './Roboto-Slab/woff2/RobotoSlab-Thin.woff2'
import RobotoSlabRegular_Web from './Roboto-Slab/woff2/RobotoSlab-Regular.woff2'

const Fonts = createGlobalStyle`
      @font-face {
        font-family: "Roboto Slab";
        font-display: swap;
        font-style: normal;
        font-weight: 100;
        src: local("Roboto Slab Thin"), local("RobotoSlab-Thin"),
          url(${RobotoSlabThin_Web})
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
      }

      @font-face {
        font-family: "Roboto Slab";
        font-display: swap;
        font-style: normal;
        font-weight: 300;
        src: local("Roboto Slab Light"), local("RobotoSlab-Light"),
          url(${RobotoSlabLight_Web})
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
      }

      @font-face {
        font-family: "Roboto Slab";
        font-display: swap;
        font-style: normal;
        font-weight: 400;
        src: local("Roboto Slab Regular"), local("RobotoSlab-Regular"),
          url(${RobotoSlabRegular_Web})
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
      }
`

export default Fonts;
