import Index from 'pages';
import RhodesianInfoPage from 'pages/rhodesian';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'styles/App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='rhodesian'>
            <RhodesianInfoPage/>
          </Route>
          <Route path='/'>
            <Index/>      
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
