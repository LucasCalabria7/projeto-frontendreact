import styled from 'styled-components'


export const MainBuy = styled.section `
    display: flex;
    justify-content: center;
    flex-direction: column;
` 

export const CardBuy = styled.section `
    text-align: center;
    border-radius: 0.5rem;
    height: 8.5vh;
    background-color: #363636;
    color:white;
    box-shadow: 0.15rem 0.15rem 0.1rem #D9DDDC;
    width: 18vw;
    margin: 1.25vh auto;
    display: flex;
    justify-content: space-evenly;
    gap: 0.25rem;
`

export const BuyName = styled.p `
    display: flex;
    align-items: center;
`

export const BuyPrice = styled.p `
    display: flex;
    align-items: center;
    font-weight: 500;
`

export const RemoveButton = styled.button `
    margin: auto 0;
    background-color: #363636;
    color: white;
    border: none;

    :hover {
        cursor: pointer;
    }
`