import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Plants from "./components/Plants";
import Form from "./components/Form";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
    </div>
    </Router>
  );
}

export default App;
