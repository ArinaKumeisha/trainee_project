import React, { ChangeEvent } from 'react';
import { SuperInputText } from 'common';

type PropsType = {
  setSearchParams: (value: { name: string } | {}) => void;
};

export const DebounceSearch = ({ setSearchParams }: PropsType) => {
  const search = (event: ChangeEvent<HTMLInputElement>) => {
    const debounce = setTimeout(() => {
      const name = event.target.value.toLowerCase();
      if (name) {
        setSearchParams({ name });
      } else {
        setSearchParams({});
      }
    }, 3000);

    return () => {
      clearTimeout(debounce);
    };
  };
  return (
    <div>
      <SuperInputText placeholder="enter name" onChange={search} autoFocus />
    </div>
  );
};
