import React from "react";
import { Typography } from "../typography";
import "./icon.css";
interface IconButtonInterface {
  clickHandle: () => void;
  icon: string;
  label: string;
}

const Icon = ({ clickHandle, icon, label }: IconButtonInterface) => {
  return (
    <div onClick={clickHandle} className="icon-button">
      <img src={icon} alt="" />
      <Typography variant="normal">{label}</Typography>
    </div>
  );
};

export default Icon;
