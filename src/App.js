import React from "react";
import './App.css';
import Form from './component/Form';
import Dashboard from "./component/Dashboard";
import { Switch, Route, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <div>
    
      
     <BrowserRouter>
      <Switch>
      <Route exact path={'/'}>
      <Form/>

      </Route>
        <Route exact path={'/dashboard'}>
        <Dashboard/>
        </Route>
      </Switch>
     </BrowserRouter>

    </div>
  );
}

export default App;
