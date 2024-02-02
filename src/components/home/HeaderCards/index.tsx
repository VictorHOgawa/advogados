import React from "react";

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
  <div
    className="Card flex gap-0.5 w-44 md:w-56 h-24 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] p-1 rounded-lg mr-8"
    style={{ backgroundColor: color ? color : "#1F932D" }}
  >
    <div className="flex flex-col items-center w-2/5 h-full justify-center">
      <img className="h-[50%] md:h-[70%]" src="/BusinesIcon.svg" alt="" />
    </div>
    <div className="flex flex-col items-center justify-between w-4/5 h-full">
      <h3 className="m-0 text-xs text-white font-bold">{title}</h3>
      <h2 className="text-center text-white">{number}</h2>
      <p className="m-0 text-[10px] text-gray-20">{text}</p>
    </div>
  </div>
);
