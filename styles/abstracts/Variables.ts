import { createGlobalStyle } from 'styled-components';

/** 재사용 변수 CSS */
const Variables = createGlobalStyle`
  :root {
    --color-black: #000;
    --color-white: #fff;
    --color-gray: #e1e1e1;
    --primary-color: #555;
  }
`

export default Variables;