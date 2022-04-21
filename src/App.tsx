import React, { useState } from 'react';
import Main from './main/Main';
import { ItemsContext } from 'utilities';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <ItemsContext.Provider
        value={{
          name,
          setName,
        }}
      >
        <Main />
      </ItemsContext.Provider>
    </div>
  );
};

export default App;
