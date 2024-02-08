import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        padding:0;
        box-sizing: border-box;//added for navbar
    }
   @font-face {
    font-family: 'gotham';
    src: url("fonts/SourceCodePro-Bold.ttf");
   }
   
   h1,h2 {
  font-family: 'gotham';
  color: whitesmoke;
  
}
h1{
    font-size: 5.5em;
}

`
export default Globalstyle
