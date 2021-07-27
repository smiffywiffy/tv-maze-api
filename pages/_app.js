import { createGlobalStyle, ThemeProvider } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  background-color: #f57eb6;
  min-height:100vh;
  padding: 1rem;
  font-family: Avenir, sans-serif;
}
.visually-hidden{
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0px;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
}
`;

const theme = {
  colors: {
    primary: "#f57eb6",
    primaryDark: "#ed1278",
    secondary: "aqua",
    accent: "#007fb7"
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
