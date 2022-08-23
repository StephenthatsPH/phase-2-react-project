import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import Plants from "./Plants";
import Form from "./Form";


function Header() {
  return (
    <>
      <header className="App-header">
        <nav className="navbar">
            <h1>PlanIT PlantIT</h1>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/plants">Plants</NavLink>
            <NavLink to="/form">Form</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/plants" component={Plants}/>
          <Route exact path="/form" component={Form}/>
        </Switch>
      </header>
    </>
  );
}

export default Header;