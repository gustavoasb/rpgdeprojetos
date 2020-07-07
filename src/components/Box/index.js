import React from "react";
import { Container, Next } from "./styles";

export default function Box({ children, buttonClick }) {
  return (
    <Container>
      <div>{children}</div>
      <Next onClick={buttonClick}>{">"}</Next>
    </Container>
  );
}
