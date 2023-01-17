import React from 'react'

import {Router} from './routes/Route'

import {GlobalStyles, Container} from './GlobalStyles'


function App() {
  return (
    <>
    <GlobalStyles/>
    <Container>
      <Router />
    </Container>
    </>
  );
}

export default App;
