import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Products from './Components/Home/Products';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import NavBar from './Components/Navbar';

import './App.css';
import ModalGrid from './Components/ModalGrid';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <ModalGrid />
    </React.Fragment>
  );
}

export default App;
