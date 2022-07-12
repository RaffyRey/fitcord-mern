import styled from "styled-components";

export const ButtonForm = styled.button`
 max-width: 600px;
 width: 100%;
 height: 45px;
 border-radius: 5px;
 border: none;
 background-color: #00193b;
 color: #fff;
 font-family: 'Poppins';
 font-size: 1rem;
 font-weight: 700;
 letter-spacing: 2px;
 cursor: pointer;
`;

export const ProfileButton = styled.button`
 width: 150px;
 height: 50px;
 border: 1px solid #00193b;
 border-radius: 3px;
 background-color: #fff;
 color: #00193b;
 font-size: 1rem;
 font-family: 'Poppins';
 font-weight: 700;
 text-transform: capitalize;
 cursor: pointer;
 transition: all 0.3s ease-in-out;
 display: flex;
 align-items: center;
 justify-content: center;
 /* box-shadow: 5px 5px 0px  #00193b; */

 svg{
   margin-right: 10px;
 }
 
 :hover{
  background-color: #fff;
  color: #0086eb;
  box-shadow: 5px 5px 0px  #00193b;
 }

 @media (max-width: 520px) {
  width: 100px;
  height: 40px;
  font-size: 0.7rem;

  svg{
    margin-right: 5px;
  }
 }
`;

export const CloseModal = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 99999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
  color: #00193b;
  border: none;
  transition: all 0.3s ease-in-out;

  svg{
    width: 20px;
    height: 20px;
  }

  :hover{
    color: #0086eb;
  }
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  height: 45px;
  width: 250px;
  border: 1px solid #00193b;
  background-color: #fff;
  color: #00193b;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins';
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  svg{
    margin-right: 10px;
  }
`;