import styled from 'styled-components'

export const GlobalSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1vh;
background-color: #202024;
margin: auto;
width: 60vw;
height:70vh;
border-radius: 1rem;
`

export const NasaLogo = styled.img`
height: 4vh;
width: 8vw;
margin-bottom: 2vh;
`

export const TitleAccount = styled.h2 `
color:white;
margin-bottom: 4vh;
`

export const InputArea = styled.section `
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
height: 1.75rem;
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

export const ButtonAccount = styled.div `
width: 20vw;
height: 8vh;
margin-top: 4vh;
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