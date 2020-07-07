import React from "react";
import { Container, Centralize } from "./styles.js";

export default function PageContainer({ background, children, centralize }) {
  return (
    <Container background={background}>
      {centralize ? <Centralize>{children}</Centralize> : children}
    </Container>
  );
}
