import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept';
import MeatDept from './components/MeatDept';
import ProduceDept from './components/ProduceDept';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" />
        <Route path="/frozen-dept" component={FrozenDept} />
        <Route path="/produce-dept" component={ProduceDept} />
        <Route path="/meat-dept" component={MeatDept} />
      </div>
    </Router>
  );
}

export default App;
