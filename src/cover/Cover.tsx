import React, {useState} from "react";
import style from "./Cover.module.css";
import SuperInputText from "../common/superInputText/SuperInputText";
import SuperButton from "../common/superButton/SuperButton";
import Select from "react-select";

const options = [
  {
    value: "a",
    label: "a",
  },
  {
    value: "b",
    label: "b",
  },
];
const Cover = () => {
  const [currentOption, setCurrentOption] = useState("");

  const getOption = () => {
    return currentOption
      ? options.find((el) => el.value === currentOption)
      : "";
  };
  const onchangeHandler = (newValue: any) => {
    setCurrentOption(newValue.value);
  };
  return (
    <div className={style.container}>
      <div className={style.select}>
        <Select
          options={options}
          value={getOption()}
          onChange={onchangeHandler}
        />
        <h1 className={style.title}> Free games</h1>
      </div>
      <div className={style.search}>
        <SuperInputText/>
        <SuperButton>Search</SuperButton>
      </div>
    </div>
  );
};

export default Cover;
