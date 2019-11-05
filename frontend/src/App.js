import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={UserDetails} />
      </Switch>
    </div>
  );
}

export default App;
