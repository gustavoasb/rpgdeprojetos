import React from 'react';
import './App.css';
import Start from './pages/Start'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start}/>
        <Route path="/projetos" component={Start}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;