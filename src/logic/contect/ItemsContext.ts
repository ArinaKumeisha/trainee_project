import React from 'react';

export const ItemsContext = React.createContext({
  name: '',
  setName: (name: string) => {},
});
