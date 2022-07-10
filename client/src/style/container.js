import styled from 'styled-components';

export const PageContainer = styled.div`
 width: 100%;
 height: 100vh;
 overflow: auto;
 display: block;
 position: relative;
 margin: 0;
 padding: 0;
`;

export const PageContent = styled.main`
 width: 100%;
 max-width: 1440px;
 height: 100%;
 margin: 0 auto;
 border: 1px solid #000;
`;

export const Form = styled.form`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;

 span{
  font-size: .9rem;
  margin: 1rem 0;
  font-family: 'Poppins';
  color: #00193b;
 }

 a{
  font-size: .9rem;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  color: #0086eb;

  &:hover{
   text-decoration: underline;
  }
 }
`;