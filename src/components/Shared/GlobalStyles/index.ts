import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --color-white: #FFF;
    --color-yellow: #FFD87D;
    --color-purple: #3B429F;
    --color-orange: #EE6F56;
    --color-black: #020209;
    --color-blue: #7576FE;
    --color-red: #FF4343;
    --color-divider: #F8F8F9;
    --color-grey: #7D7A80;
    --color-mid-grey: #696871;
    --color-light-grey: #C6CBD2;
    --color-placeholder-grey: #DDE0E5;

    font-size: 16px;

    @media (min-width: 768px) and (max-width: 1439.8px) {
      font-size: calc((1280 / 1440) * 16px);
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  section {
    max-width: initial;
    padding: 0;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  .--center {
    text-align: center;
  }

  .--desktop-only {
    display: none;
  }

  .--mobile-only {
    display: block;
  }

  @media (min-width: 768px) {
    .--desktop-only {
      display: block;
    }

    .--mobile-only {
      display: none;
    }
  }
`;

export default GlobalStyles;
