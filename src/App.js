import Home from "./pages/Home";
import { Provider } from "react-redux";
import Store from "./Store";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import ThumbnailList from "./pages/ThumbnailList";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/thumbnail/:id">
            <ThumbnailList />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
