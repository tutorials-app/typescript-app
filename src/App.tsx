import React from 'react';
import './App.css';
import Todo from './Todo'
import store from './store'

const App: React.FC = () => {
  return (
    <div className="App">
      <Todo todo={store.todo}/>
    </div>
  );
}

export default App;
