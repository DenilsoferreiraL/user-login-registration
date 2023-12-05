import styled from "styled-components"

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 90px;
border: ${props => props.isBack ? '1px solid #ffffff' : 'none'};
gap: 20px;
border-radius: 14px;
background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.80)'};
font-size: 17px;
font-style: normal;
font-weight: bold;
line-height: 28px;
color: #ffffff;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;


&:hover{
    opacity:0.8;
}

&:active{
    opacity: 0.4;
} 

img{
    transform: ${props => props.isBack ? 'rotateY(180deg)' : '' };
}

`;