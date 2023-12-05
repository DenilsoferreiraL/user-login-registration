import styled from "styled-components"
import Background from "../../assets/background2.svg"


export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
min-height: 100vh;
`
export const Image = styled.img`
margin-top: 30px;
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

