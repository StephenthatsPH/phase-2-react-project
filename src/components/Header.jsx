import { Route, Switch } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import Plants from "./Plants";
import Form from "./Form";


function Header() {
  return (
    <>
      <header className="App-header">
        <NavBar />
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