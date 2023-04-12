import React from 'react';
import './App.css';

import Search from './components/Search';

const App = () => {

  return (
    <div className='App'>
      <h1>Sneezer</h1>
      <p>Nose around that Deezer music library!</p>
      <Search />
    </div>
  );
}

export default App;
