import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { SuperInputText } from 'common';
import { addHistory, useAppDispatch } from 'reduxEntities';
import { ItemsContext, useCustomDebounce } from 'utilities';

type Props = {
  endpoint: string;
};

export const SearchName = ({ endpoint }: Props) => {
  const dispatch = useAppDispatch();
  const { setSearchParams, name: queryName } = useContext(ItemsContext);
  const [inputValue, setInputValue] = useState(queryName);

  useEffect(() => {
    setInputValue(queryName)
  }, [queryName])


  const search = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value.toLowerCase();
    if (name) {
      setSearchParams({ name });
      dispatch(addHistory(`${endpoint}${name}`));
    } else {
      setSearchParams({});
    }
  };

  const searchTitleHandler = useCustomDebounce(search, 3000);

  const inputTextChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLocaleLowerCase());
    searchTitleHandler(e);
  }

  return (
    <SuperInputText value={inputValue} placeholder="enter name" onChange={inputTextChangeHandler} autoFocus />
  );
};
