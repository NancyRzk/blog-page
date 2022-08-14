import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";

import Single from "./pages/single/Single";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/login">
          {currentUser ? <Homepage /> : <Login />}
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
