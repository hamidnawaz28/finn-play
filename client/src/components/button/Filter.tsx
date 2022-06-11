import React from "react";
import { Typography } from "../../components";
import "./filter.css";

interface FilterButtonInterface {
  title: string;
  selected: boolean;
  onClick: () => void;
}

const Filter = ({
  title = "",
  selected = false,
  onClick,
}: FilterButtonInterface) => {
  return (
    <div className="filter">
      <button
        className={`filter__button${
          selected ? " filter__button--selected " : ""
        }`}
        onClick={onClick}
      >
        <Typography variant="normal">{title}</Typography>
      </button>
    </div>
  );
};

export default Filter;
