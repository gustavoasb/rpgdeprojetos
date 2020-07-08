import React from "react";
import { LifeContainer, Heart } from "./styles";
import heart_img from "../../../assets/heart.svg";
import dark_heart_img from "../../../assets/dark_heart.svg";

export default function Life({ health }) {
  if (!health) {
    health = 2;
  }

  function Hearts(){
    return(
      [...Array(5)].map((item, idx) => (
        ((idx+1) > health) ? <Heart key={idx} src={dark_heart_img} alt={"Coração"} /> : <Heart key={idx} src={heart_img} alt={"Coração"} />
      ))
    )
  }

  return (
    <LifeContainer>
      <Hearts />
    </LifeContainer>
  );
}
