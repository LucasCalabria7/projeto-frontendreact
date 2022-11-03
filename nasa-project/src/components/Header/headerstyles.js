import React from 'react'
import styled from 'styled-components'

export const HeaderContainer = styled.div `
    display: flex;
    height: 20vh;
    border-bottom: 2px solid white;
`

export const HeaderLogo = styled.h1 `
    display:flex;
    width: 0.1vw;
    height: 3vh;
    padding: 0 2vw;
    margin: auto 0;
`

export const ToolBar = styled.section `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Li = styled.li `
    display: flex;
    list-style: none;
    font-size: 3vh;
`

export const ToolBarItems = styled.ul `
    display: flex;
    width: 94vw;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`

export const A = styled.a `
    text-decoration: none;
    color: white;
    font-weight: 700;
`

export const InputHeader = styled.input `
    height: 5vh;
    width: 16vw;
    text-transform: uppercase;
    border-radius: 0.35rem;
    font-size: 1rem;
    border: 2px solid white;
    text-align: center;
    background-color: transparent;
    color: white;

    ::placeholder {
        color:white;
    }
`

