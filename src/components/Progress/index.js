import React from "react";
import { ProgressContainer } from "./styles";
import ProgressBar from './ProgressBar'

export default function Progress({ percentage }) {
  return (
    <ProgressContainer>
        Progress Bar <ProgressBar percentage={percentage}/>
    </ProgressContainer>
  );
}
