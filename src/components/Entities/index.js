import React from "react";
import {EntitiesContainer} from "./styles.js";
import Boss from './Boss'
import Players from './Players'
import BossImg from '../../assets/orc04.png'

export default function Entities({ project_id }) {
  return (
    <EntitiesContainer>
      <Players />
      <Boss name={`O'rrc`} img={BossImg} />
    </EntitiesContainer>
  );
}
