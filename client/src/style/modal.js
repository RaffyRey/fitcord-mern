import styled from "styled-components";


export const ModalOvelay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
<<<<<<< HEAD
  z-index: 9999;
=======
  z-index: 1000;
>>>>>>> 0ddcdeaa7e0b912f4b4f4288a2c25697aa60e5f6
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

`;
export const UserModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
<<<<<<< HEAD
  z-index: 9999;
=======
  z-index: 1001;
>>>>>>> 0ddcdeaa7e0b912f4b4f4288a2c25697aa60e5f6
  width: 500px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  
  header{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding-right: 10px;
    justify-content: end;
    /* border-bottom: 1px solid #e6e6e6; */
  }
`;

export const ModalUserInfoContainer = styled.div`
  width: 100%;
  height: 320px;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr ; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Profile-Icon Profile-Icon UserName UserName"
    "Profile-Icon Profile-Icon WorkoutLength WorkoutLength"; 
`;

export const UserInfoProfileIcon = styled.div`
  grid-area: Profile-Icon;
border:1px solid  rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    width: 100px;
    height: 100px;    
  }
`;

export const UserInfoName = styled.span`
  grid-area: UserName;
border:1px solid  rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;

  h1{
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: capitalize;

    :last-child{
      margin-top: 10px;
      font-size: .7rem;
    }
  }
`;

export const UserInfoWorkoutLength = styled.span`
  grid-area: WorkoutLength;
border:1px solid  rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 1rem;
    font-weight: bold;
    
  }
`;

export const ModalLogoutButtonContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;