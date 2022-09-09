import React from 'react'
import styled from "styled-components";

const Error = ({message}) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  )
}

export default Error;

const Container = styled.div`
  width: fit-content;
  text-align: center;
  margin: 3.5rem auto;

  p {
    font-size: clamp(1rem, 1.3vw, 1.2rem);
  }
`
