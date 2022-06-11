import * as React from "react";
import "./input-with-icon.css";
import { Typography } from "../typography";
import { Text } from "../../ts/interfaces";
import "./input.css";
interface InputInterface {
  name?: string;
  label: string;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  variant?: Text;
  greyTitle?: boolean;
}

const Input = ({
  name = "",
  label,
  placeholder = "",
  value,
  setValue,
  variant = "large",
  greyTitle = true,
}: InputInterface) => {
  return (
    <div className="input">
      <div className="input__label">
        <Typography variant={variant}>{label}</Typography>
      </div>
      <input
        className="input__field"
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
