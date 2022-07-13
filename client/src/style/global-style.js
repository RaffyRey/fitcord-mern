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
  overflow: hidden;
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

 ::-webkit-scrollbar {
  width: 5px;
  height: 100%;
  background-color: #f5f5f5;
 }

  ::-webkit-scrollbar-thumb {
    background-color: #00193b;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #0086eb;
    }
  }
`;