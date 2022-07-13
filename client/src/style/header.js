import styled from 'styled-components';
import FitCordLogo from '../images/fitcord-logo-removebg-preview.png'

export const FormHeader = styled.header`
 width: 100%;
 height: 150px;
 display: flex;
 justify-content: center;
 align-items: center;
 border-bottom: 1px solid #e6e6e6;
 margin-bottom: 16px;

 span{
  width: 130px;
  height: 130px;
  background-image: url(${FitCordLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  transform: scale3d(1.1, 1.1, 1.1);
  animation: beat .25s infinite alternate;
 :hover{
   }

   @keyframes beat{
    to { transform: scale(1.13); }
   }
 }
`;

export const DashBoardHeader = styled.header`
 width: 100%;
 height: 100px; 
 background-color: #fff;
 border-bottom: 1px solid #e6e6e6;
 background-color: transparent;
 position: sticky;
 top: 0;
 left: 0;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 1.5rem;
 z-index: 1000;

 main{
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
 }

 span{
  height: 100px;
  width: 100px;
  background-image: url(${FitCordLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

    :hover{
    transform: scale3d(1.1, 1.1, 1.1);
    animation: beat .25s infinite alternate;
    }

    @keyframes beat{
    to { transform: scale(1.4); }
    }
   :hover{
    transform: scale3d(1.1, 1.1, 1.1);
    animation: beat .25s infinite alternate;
   }

   @keyframes beat{
    to { transform: scale(1.11); }
   }
  }
`;

