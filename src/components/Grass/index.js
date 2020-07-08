import React from "react";
import { GrassContainer, GrassOverlay } from "./styles.js";

export default function Grass({ img, mode }) {
  return (
      <>
    <GrassOverlay />
    <GrassContainer img={img} mode={mode} />
    </>
  );
}
