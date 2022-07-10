import styled from 'styled-components';
import FitCordLogo from '../images/fitcord-logo-removebg-preview.png'

export const FormHeader = styled.header`
 width: 100%;
 height: 150px;
 display: flex;
 justify-content: center;
 align-items: center;
 background-image: url(${FitCordLogo});
 background-size: contain;
 background-repeat: no-repeat;
 background-position: center;
`;