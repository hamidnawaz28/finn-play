import * as React from "react";
import "./input-with-icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface InputWithIconInterface {
  name: string;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  searchHandle: () => void;
}

const InputWithIcon = ({
  name = "",
  placeholder = "",
  value,
  setValue,
  searchHandle,
}: InputWithIconInterface) => {
  return (
    <div className="search-filter">
      <input
        className="search-filter__field"
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="search-filter__icon" onClick={searchHandle}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default InputWithIcon;
