import styled from 'styled-components'

export const Card = styled.div `
    margin: 1rem;
    width: 25vw;
    height: 60vh;
    border: 2px groove white;
    box-shadow: 0px 0.25rem 0.60rem 0 #D9DDDC;
    text-align: center;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

    >img {
        padding-top: 0.6rem;
        width: 15rem;
        height: 15rem;
    }
`

export const Button = styled.button `
    border-radius: 0.5rem;
    padding : 0.30rem;
    text-transform: uppercase;
    background-color: #BEBDB8;
    font-size: 0.80rem;
    font-weight: bold;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    cursor: pointer;
`

export const Svg = styled.svg `
    display: flex;
    justify-content: center;
    height: 1.5rem;
    margin: 1vh 0;
`

export const ProductName = styled.h3 `
    margin-top: 0.40rem;
`