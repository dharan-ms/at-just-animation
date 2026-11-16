import { createGlobalStyles } from 'goober/global'

createGlobalStyles`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
    color: #f4f4f4;
    font-family: "Share Tech Mono", ui-monospace, monospace;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    touch-action: none;
    user-select: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, textarea, input {
    font: inherit;
    color: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.35);
    border-radius: 10px;
  }
`
