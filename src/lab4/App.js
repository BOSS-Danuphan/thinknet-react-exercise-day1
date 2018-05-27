import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
color: red;
&:hover {
    color: blue;
}
`

class App extends Component {
  render() {
    return (
      <Title>
        Test !!
      </Title>
    );
  }
}

export default App;
