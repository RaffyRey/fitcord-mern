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
 padding-bottom: 30px;
 margin: 0 auto;
 position: relative;
 display: block;
<<<<<<< HEAD
=======
`;

export const DashboardContent = styled.div`
 width: 100%;
 height: calc(100% - 80px);
 /* border: 1px solid black; */
 display: flex;
 flex-direction: column;
>>>>>>> 0ddcdeaa7e0b912f4b4f4288a2c25697aa60e5f6
`;

export const Form = styled.form`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 overflow: auto;

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

export const DashboardContent = styled.div`
 width: 100%;
 height: calc(100% - 80px);
`;
