/**
 * I always create a globalStyle to hold some main styling.
 * Here you can also add themes and custom font-imports if
 * you would like.
 */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%; // I set one rem equal to 10px
      // I prefer rems over px since rem is a relative unit related to the root font sizes.
      // We can also use em and other units, but in this project we keep it simple.
    }
    
    body {
      background-color: hsl(240, 100%, 93%); // converting this to hsl to easier find versions of it
      box-sizing: border-box;
      font-family: 'raleway', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;