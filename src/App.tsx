import React from 'react';
import Main from './main/Main';
import { ItemsContext } from 'utilities';
import './App.css';
import { useSearchParams } from 'react-router-dom';
import { ErrorBoundary } from 'components/errorBoundary';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('name') || '';
  return (
    <div className="App">
      <ItemsContext.Provider
        value={{
          searchParams,
          setSearchParams,
          postQuery,
        }}
      >
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </ItemsContext.Provider>
    </div>
  );
};

export default App;
