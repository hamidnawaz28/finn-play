import React from "react";
import "./check.css";
import { Typography } from "../../components";

interface CheckInterface {
  label: string;
  checked: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const Check = ({ label, checked = false, setCheck }: CheckInterface) => {
  return (
    <div className={`check ${checked ? " checked " : ""}`}>
      <div className="check__button" onClick={() => setCheck(!checked)}>
        <div className={`check__button__inner`}></div>
      </div>
      <div className="check__label">
        <Typography variant="large">{label}</Typography>
      </div>
    </div>
  );
};

export default Check;
