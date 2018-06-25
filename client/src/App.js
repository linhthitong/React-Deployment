import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (

<Router>
  <div>
    <Nav />
    <Switch>
    <Route exact path="/books" component={Books} />
    <Route exact path="/" component={Books} />
    <Route exact path="/books/:id" component={Detail} />
    <Route coponenet={NoMatch}/>
    </Switch>

  </div>
  </Router>
);
 
export default App;
