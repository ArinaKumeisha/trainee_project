import React from 'react';
import { useState } from 'react';
import style from './MainPage.module.css';
import Select from 'react-select';
import { PropsValue } from 'react-select';
import { options } from 'utilities/index';
import { Options } from 'utilities/options/options';

type PropsType = {
  onclickHandler: (title: string) => void;
};
export const MainPage = ({ onclickHandler }: PropsType) => {
  const [valueOption, setValueOption] = useState<Options>({
    value: 'ammos',
    label: 'ammos',
  });

  const handleChange = (option: PropsValue<Options>) => {
    onclickHandler((option as Options).value);
  };

  return (
    <div className={style.container} id="page">
      <h1 className={style.title}>Elden Ring</h1>
      <Select
        className={style.select}
        name="select"
        options={options}
        onChange={handleChange}
        defaultValue={valueOption}
        value={valueOption}
      />

      <div className={style.description}>
        The Elden Ring is an amazing game released by FromSoftware in 2022. In our site
        you can learn everything about the heroes and much more
      </div>
    </div>
  );
};
