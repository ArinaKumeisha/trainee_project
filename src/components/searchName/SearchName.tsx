import React, { ChangeEvent } from 'react';
import { SuperInputText } from 'common';
import { addHistory, useAppDispatch } from 'reduxEntities';
import { useCustomDebounce } from 'utilities';

type Props = {
  setSearchParams: (value: { name: string } | {}) => void;
  endpoint: string;
};

export const SearchName = ({ setSearchParams, endpoint }: Props) => {
  const dispatch = useAppDispatch();

  const search = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.value.toLowerCase();
    if (name) {
      setSearchParams({ name });
      dispatch(addHistory(`${endpoint}${name}`));
    } else {
      setSearchParams({});
    }
  };

  const searchTitleHandler = useCustomDebounce(search, 3000);

  return (
    <SuperInputText placeholder="enter name" onChange={searchTitleHandler} autoFocus />
  );
};
