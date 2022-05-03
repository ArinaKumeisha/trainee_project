import React, { ChangeEvent, useContext } from 'react';
import { SuperInputText } from 'common';
import { addHistory, useAppDispatch } from 'reduxEntities';
import { ItemsContext, useCustomDebounce } from 'utilities';

type Props = {
  endpoint: string;
};

export const SearchName = ({ endpoint }: Props) => {
  const dispatch = useAppDispatch();
  const { setSearchParams } = useContext(ItemsContext);
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

  return (
    <SuperInputText placeholder="enter name" onChange={searchTitleHandler} autoFocus />
  );
};
