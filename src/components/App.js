import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Intro from './Intro';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Link } from "react-router-dom";
import "./Intro.css";

const API = "https://sushidb01.herokuapp.com/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushiArray) => {
        const updatedSushis = sushiArray.map((sushi) => {
          sushi.eaten = false;
          return sushi;
        });
        setSushis(updatedSushis);
      });
    // .then(setSushis);
  }, []);

  function handleAddMoney(newMoney) {
    setMoney((money) => money + newMoney);
  }

  function handleEatSushi(sushiId, sushiPrice) {
    if (money >= sushiPrice) {
      // [{eaten: false}, {}, {}, {}] => [{eaten: true},{},{},{}]
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === sushiId) {
          return {
            ...sushi,
            eaten: true,
          };
        } else {
          return sushi;
        }
      });
      setSushis(updatedSushis);
      setMoney((money) => money - sushiPrice);
    } else {
      alert("Not enough money");
    }
  }

  // [{},{},{},{}] => [{},{}]
  const eatenSushis = sushis.filter((sushi) => sushi.eaten);

  return (
<Router>
<div className="App">
  <Switch>
  <Route path="/app">
  <Link to="/">  
  <div className="btn"><p className="p">X</p></div>
  </Link>
      
  <Link to="/">  
    <div className="btn2"><p className="p">X</p></div>
  </Link>

  <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
  <Table plates={eatenSushis} money={money} onAddMoney={handleAddMoney} />
  </Route>

  <Route path="/">
  <Intro />
  </Route>
  
  </Switch>

</div>
  </Router>
  );
}

export default App;