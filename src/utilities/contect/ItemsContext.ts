import React from 'react';

export const ItemsContext = React.createContext({
  postQuery: '',
  setSearchParams: (value: {} | { name: string }) => {},
  searchParams: {},
});
