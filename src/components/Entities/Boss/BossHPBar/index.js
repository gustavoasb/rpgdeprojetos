import React from "react";
import { BossHPContainer } from "./styles";

export default function BossHPBar({percentage}) {
  return (
    <BossHPContainer percentage={percentage}/>
  );
}