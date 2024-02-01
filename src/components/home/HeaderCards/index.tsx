import React from "react";
import { Cards } from "./styles";

interface HeaderCardsProps {
  title: string;
  number: any;
  text: string;
  color?: string;
}

export const HeaderCards: React.FC<HeaderCardsProps> = ({
  title,
  number,
  text,
  color,
}) => (
  <Cards color={color}>
    <div style={{ width: "40%", justifyContent: "center" }}>
      <img src="/BusinesIcon.svg" alt="" />
    </div>
    <div>
      <h3 style={{textAlign: text !== "Integrantes"? "center" : "start" , paddingLeft: text !== "Integrantes"? "0rem" : "0.8rem"}}>
        {title}
      </h3>
      <h2>{number}</h2>
      <p>{text}</p>
    </div>
  </Cards>
);
