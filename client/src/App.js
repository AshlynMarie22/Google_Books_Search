
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Navbar from "./components/Navbar/navbar";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";
import axios from "axios";
import './App.css';

function App() {
  useEffect(() => {
    console.log("Testing API call res:")
    axios
      .get("/api/config")
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="App">
      <Navbar />
        <Jumbotron></Jumbotron>
      
        <Switch>
          <Route exact path="/" component={Search}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/saved" component={Saved}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
