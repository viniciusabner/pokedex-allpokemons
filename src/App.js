import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Pokedex from "./pages/pokedex/pokedex";
import Pokemon from "./pages/pokemon/pokemon";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
