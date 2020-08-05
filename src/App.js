import React from 'react';
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <h1 className="App">APP:hello world </h1>
    </Provider>
  );
}

export default App;
