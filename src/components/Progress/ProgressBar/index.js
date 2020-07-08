import React from "react";
import { ProgressBarContainer } from "./styles";

export default function ProgressBar({percentage}) {
  return (
    <ProgressBarContainer percentage={percentage}/>
  );
}
