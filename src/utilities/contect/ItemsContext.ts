import React from 'react';

export const ItemsContext = React.createContext({
  name: '',
  limit: '10',
  page: '',
  setSearchParams: (values: any) => {},
  searchParams: {},
});
