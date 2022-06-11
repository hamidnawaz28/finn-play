import React from "react";
import "./column-selector.css";

const config = [2, 3, 4];

interface ColumnSelectorInterface {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const ColumnSelector = ({ selected, setSelected }: ColumnSelectorInterface) => {
  return (
    <div className="columns-selector">
      {config.map((item, index) => (
        <React.Fragment>
          <div
            onClick={() => setSelected(item)}
            className="columns-selector__item"
          >
            <div
              className={`columns-selector__nob ${
                item > selected ? " columns-selector__nob-selected " : ""
              }`}
            >
              {item}
            </div>
          </div>
          {config.length - 1 !== index && (
            <div
              className={`columns-selector__bar ${
                item >= selected ? " columns-selector__bar-selected " : ""
              }`}
            >
              <div></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ColumnSelector;
