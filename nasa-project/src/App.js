import React from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main/Main'

import styled, {createGlobalStyle} from 'styled-components'



const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bebas Neue', cursive;
  }
`

const Container = styled.div `
  display:flex;
  flex-direction:column;
  min-height: 100vh;
  max-width: 100vw;
  background-color: #363636;
`


function App() {
  return (
    <>
    <GlobalStyles/>
    <Container>
      <Header />
      <Main />
    </Container>
    </>
  );
}

export default App;
