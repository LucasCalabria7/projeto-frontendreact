import React from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main/Main'

import {css} from 'styled-components'
import styled, {createGlobalStyle} from 'styled-components'

const InterFont = css`@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap')`


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 1.10rem Inter;
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
