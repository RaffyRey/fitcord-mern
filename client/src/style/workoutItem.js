import styled from "styled-components";

// workout item container
export const WorkoutItemContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 flex-direction: row;
 flex-flow: wrap;
`;

export const WorkoutItem = styled.div`
 width: 350px;
 height: 250px;
 border-radius: 10px;
 box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background-color: #fff;
 margin: 10px;
 position: relative;
`;

export const WorkoutDeleteButton = styled.button`
 position: absolute;
 top: 15px;
 right: 20px;
 background-color: #fff;
 border: none;
 border-radius: 9999px;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 30px;
 height: 30px;
 cursor: pointer;
 transition: all 0.3s ease-in-out;

 svg{
  color: #d90429;
  width: 15px;
  height: 15px;
 }

 :hover{
  background-color: #ffdab9;

  /* &:after{
   content: "Delete";
   position: absolute;
   color: #fff;
   bottom: -30px;
   padding: 4px 2px;
   border-radius: 4px;
   font-size: .8rem;
   background-color: #d90429;
  } */
 }
`;