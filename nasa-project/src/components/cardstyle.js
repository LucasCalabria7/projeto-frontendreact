import styled from 'styled-components'

export const CardGlobalStyle = styled.div `
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
    width: 8rem;
    height: 2rem;
    border-radius: 0.5rem;
    padding : 0.30rem;
    text-transform: uppercase;
    background-color: #DDDDDD;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    cursor: pointer;
`

export const ProductName = styled.h3 `
    margin-top: 0.40rem;
    font-weight: 500;
`

export const ProductPrice = styled.h3 `
    font-weight: 500;
    margin-top: 0.20rem;
`