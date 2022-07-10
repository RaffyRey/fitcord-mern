import styled from 'styled-components';

export const FormInputContainer = styled.div`
  max-width: 630px;
  width: 100%;
  margin: 8px 0;
  padding: 8px 1rem;
  display: flex;
  justify-content: center;
  position: relative;

  input{
   width: 100%;
   height: 45px;
   padding: 0 1rem;
   font-size: 1.1rem;
   font-family: 'Poppins';
   border-radius: 8px;
   border: 1.5px solid #00193b;
   outline: none;
   transition: all 0.3s ease-in-out;

  ::placeholder{
   color: transparent;
  }
  &:not(:placeholder-shown){
    + label{
     top: 15%;
     font-size: 1rem;
     background-color: #fff;
     padding: 0 5px;
    }
   }
  }

  
 label{
  position: absolute;
  top: 50%;
  left: 5%;
  font-weight: bold;
  transform: translateY(-50%);
  transition: all .3s ease-in-out;
  color:#00193b;
 }

 /*input active  */
 input:focus{
   border-color: #0086eb;
   ~label{
    top: 15%;
    color: #0086eb;
    font-size: 1rem;
    background-color: #fff;
    padding: 0 5px;
   }
  }

`;