import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *,*::before,*::after{
   box-sizing:border-box;
   margin:0;
   padding:0;
 }

 html,body{
  display: block;
  position: relative;
 }

 h1,h2,h3,h4,h5,h6,p,label{
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  padding: 0;
  margin: 0;
  line-height: normal;
 }
`;