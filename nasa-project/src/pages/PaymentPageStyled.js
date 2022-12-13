import styled from 'styled-components'

export const GlobalSection = styled.section `
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
background-color: #202024;
margin: auto;
width: 65vw;
height:60vh;
border-radius: 1rem;
`

export const Logo = styled.img `
    height: 5vh;
    width:8vw;
    margin: 2vh 0;
`

export const InputArea = styled.section `
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    width: 20vw;
`

export const Input = styled.input `
    width: 20vw;
    background: #121214;
    border: 1px solid #323238;
    border-radius: 6px;
    height: 2rem;
    padding-inline: 1.25rem;

    color: white;
    text-transform: uppercase;
`

export const Label = styled.label `
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: 0.01px;
    text-transform: uppercase;
    color: #e1e1e6;
`

export const CreditCardArea = styled.section `
    display: flex;
    flex-direction: column;
    margin: 3vh 5vw; 
    margin-top: 7.5vh;
    width:25vw;
    height:35vh;
    border-radius: 1rem;
    background: rgb(15,15,15);
    background: linear-gradient(90deg, rgba(15,15,15,1) 0%, rgba(0,29,101,1) 100%);
`

export const TopIcons = styled.div `
    height: 8%;
    width: 90%;
    display:flex;
    justify-content: space-between;
    margin: 1.5rem;
`

export const InfoArea = styled.div `
    margin: 1.5rem;
    display: flex;
    flex-direction: column;
    color: white;
`

export const Number = styled.p `
    font-size: 2.25rem;
    font-weight: 900;
    margin: 0 2.25rem;
`

export const Name = styled.p `
    margin-top: 1rem;
    font-size: 0.8rem;
`

export const DataUser = styled.p `
    font-size: 1.25rem;
`

export const CreditCardFooter = styled.div `
    display: flex;
    width: 90%;
    height: 10%;
    justify-content: space-between;
    margin: 0 1.5rem;
    color: white;
`

export const FooterButton = styled.div `
    width: 40vw;
    height: 8vh;
    background-color: #121214;
    COLOR: WHITE;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;

    :hover {
        background-color: lightgray;
        color: black;
        cursor: pointer;
    }
`