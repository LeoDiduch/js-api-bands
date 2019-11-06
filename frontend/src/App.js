import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
