import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #373a36;
    --color-accent: #ff5c35;
    --color-secondary: #c7c8c7;
    --color-white: #ffffff;
    --color-gray: #909288;
    --color-light: #d9d8d6;
    --color-danger: #ff4438;
    --color-pink: #f4d3d6;
    --color-bg: #e5e1e6;
    --color-shadow: rgba(55, 58, 54, 0.08);
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--color-bg);
    color: var(--color-primary);
    min-height: 100vh;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    color: var(--color-primary);
    margin-top: 0;
    font-weight: 700;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: var(--color-danger);
    text-decoration: underline;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
  }

  button {
    background: var(--color-accent);
    color: var(--color-white);
    border: none;
    border-radius: 4px;
    padding: 0.5em 1.2em;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 2px 8px var(--color-shadow);
    transition: background 0.2s;
  }
  button:hover {
    background: var(--color-danger);
  }

  ::selection {
    background: var(--color-pink);
    color: var(--color-primary);
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    background: var(--color-light);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray);
    border-radius: 8px;
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: var(--color-white);
    box-shadow: 0 2px 8px var(--color-shadow);
    border-radius: 8px;
  }
`;
