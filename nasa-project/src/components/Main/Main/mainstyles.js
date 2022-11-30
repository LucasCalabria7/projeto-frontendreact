import styled from 'styled-components'

export const MainContainer = styled.div `
    display: flex;
`

export const FilterArea = styled.section `
    width: 20vw;
    min-height: 80vh;
    background-color: #48494B;
    margin: 0.5rem;
    border-radius: 1rem;
`
export const CardsContainer = styled.section `
    width: 60vw;
    display:flex;
    justify-content:center; 
    flex-wrap: wrap;
`
export const ShopArea = styled.section `
width: 20vw;
min-height: 80vh;
background-color: #48494B;
margin: 0.5rem;
border-radius: 1rem;
`

export const ImgBuy = styled.img `
    height: 2.5rem;
    width: 2.5rem;
    margin-top: 1vh;
`

export const BuyTitle = styled.p `
    color: white;
    margin-top:2vh;
    height: 2.5rem; 
`

export const BuyHeader = styled.section `
    display:flex;
    justify-content:center;
    height:15vh
`
export const BuyFooter = styled.section `
    display: flex;
    justify-content: center;
    flex-direction: column;
    `

export const CardFooter = styled.section `
    border-radius: 0.5rem;
    height: 10vh;
    background-color: #DDDDDD;
    box-shadow: 0.15rem 0.15rem 0.1rem black;
    border: 2px groove black;
    text-transform: uppercase;
    width: 18vw;
    margin: 1.25vh auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.25rem;
`

export const TextFooter = styled.p `
    font-weight: 900;
    font-size: 1rem;
    `