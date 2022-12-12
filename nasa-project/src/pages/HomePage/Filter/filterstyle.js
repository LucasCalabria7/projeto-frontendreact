import styled from 'styled-components'

export const ImgFilter = styled.img `
    height: 2.5rem;
    width: 2.5rem;
    margin-top: 1vh;
`

export const FilterTitle = styled.p `
    color: white;
    margin-top:2vh;
    height: 2.5rem; 
`

export const FilterHeader = styled.section `
    display:flex;
    justify-content:center;
    height:15vh
`

export const FilterMain = styled.section `
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const InputSearch = styled.input `
    text-align: center;
    border-radius: 0.5rem;
    height: 4.5vh;
    background-color: transparent;
    box-shadow: 0.15rem 0.15rem 0.1rem #D9DDDC;
    width: 16vw;
    margin: 0 auto;

    :: placeholder {
        color: white;
    }
`

export const OrderTitle = styled.p `
    color: white;
    margin-top:6vh;
    height: 2.5rem;
    text-align: center;
`

export const InputSelect = styled.select `
    text-align: center;
    border-radius: 0.5rem;
    height: 4.5vh;
    background-color: #48494B;
    color:white;
    box-shadow: 0.15rem 0.15rem 0.1rem #D9DDDC;
    width: 16vw;
    margin: 3vh auto;
`