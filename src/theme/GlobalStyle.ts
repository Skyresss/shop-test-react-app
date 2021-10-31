import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}
html {
  overflow: hidden;
}
html,
body,
#root {
  height: 100%;
  overflow: auto;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 21px;
  font-family: Roboto, Inter, sans-serif, -apple-system, BlinkMacSystemFontm, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
  outline: 0;
}
body {
  background: #f2f2f2;
  color: #2d2d2d;
}
button, input {
  outline: 0;
  border: 0;
  width: 100%;
}
button, input, span {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
}
span, input {
   letter-spacing: -0.02em;
}
input {
  appearance: none;
}
`;

export default GlobalStyle;
