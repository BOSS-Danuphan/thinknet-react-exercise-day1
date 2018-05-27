import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 60px;
  background-color: aqua;
  color: blue;

  > div + div {
    padding-top: 10px;
  }
`;

const EmailBox = styled.div`
  input {
    width: 100%;
    height: 1.5rem;
  }
`;

const Footer = styled.div`
  position: relative;
  button {
    background-color: blue;
    padding: 5px 10px;
    color: white;
    position: absolute;
    right: 0;
  }
`;

const EmailBlock =() => {
  return (
    <Container>
      <div>Enter your email to be notified when Menucopia is ready to try out.</div>
      <EmailBox><input /></EmailBox>
      <Footer>
        <span>Your email address will be kept private.</span>
        <button>send</button>
      </Footer>
    </Container>
  );
}

export default EmailBlock;
