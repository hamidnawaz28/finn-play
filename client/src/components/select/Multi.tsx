import React from "react";
import Select, { MultiValue } from "react-select";

interface OptionsInterface {
  value: string | number;
  label: string;
}
type OptionArrayInterface = MultiValue<OptionsInterface>;

interface SelectInterface {
  value: OptionArrayInterface;
  options: OptionsInterface[];
  setValue: React.Dispatch<React.SetStateAction<OptionArrayInterface>>;
}

const Multi = ({ value, setValue, options }: SelectInterface) => {
  return (
    <div className="multi-select">
      <Select
        options={options}
        isMulti={true}
        value={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
};

export default Multi;
