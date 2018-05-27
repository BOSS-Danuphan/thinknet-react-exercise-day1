import React, { Component } from 'react';
import styled from 'styled-components';
import EmailBlock from './EmailBlock';

const Container = styled.div`
  max-width: 800px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <EmailBlock />
      </Container>
    );
  }
}

export default App;
