import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

 *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  html, body, #root{
    min-height:100%;
  }

  body{
    display:flex;
    justify-content:center;
    align-items:center;

    background: #020301;
    -webkit-font-smoothing: antialiased !important;/* deixa as fontes mais definidas*/

  }

  body, input, button{
    color:#222;
    font-size:90%;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }

  button{
    cursor: pointer;
  }
`;
