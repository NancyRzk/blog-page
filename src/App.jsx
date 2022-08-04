import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";

import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/postsz">
          <Homepage />
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
