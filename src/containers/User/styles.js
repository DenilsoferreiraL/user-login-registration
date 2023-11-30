import styled from "styled-components"
import Background from "../../assets/background2.svg"


export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100vh;
`
export const ContainerItens = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
border-radius: 61px 61px 0px 0px;
background: linear-gradient(157deg,
      rgba(255, 255, 255, 0.60) 0.84%,
      rgba(255, 255, 255, 0.60) 0.85%,
      rgba(255, 255, 255, 0.15) 100%);
padding: 50px 36px;
backdrop-filter: blur(45px);
`
export const Image = styled.img`
margin-top: 30px;
`
export const H1 = styled.h1`
color: #FFF;
text-align: center;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 80px;
`

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 130px;
border-radius: 14px;
gap: 20px;
background:transparent;
font-size: 17px;
font-style: normal;
font-weight: bold;
line-height: 28px;
color: #ffffff;
border:1px solid;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;


img{
    transform: rotate(180deg);
}

&:hover{
    opacity:0.8;
}

&:active{
    opacity: 0.5;
} 
`
export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
height: 58px;
background:rgba(255,255,255,0.25);
box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
border-radius: 14px;
outline: none;
border: none;
margin-bottom: 20px;

p{
    font-size: 24px;
    line-height: 28px;
    font-style: normal;
    font-weight: normal;
    color:#ffffff
}

button{ 
    border: none;
    background:none;
    cursor: pointer;
}
`

