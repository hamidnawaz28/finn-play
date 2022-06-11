import React from "react";
import "./typography.css";
import { Children, Text } from "../../ts/interfaces";

interface TypographyInterface {
  variant: Text;
  grey?: boolean;
  bold?: boolean;
  children: Children;
}

const Typography = ({
  variant = "normal",
  bold = false,
  grey = false,
  children,
}: TypographyInterface) => {
  return (
    <div
      className={`${variant} ${bold ? " weight-bold " : " weight-regular "} ${
        grey ? " grey " : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Typography;
