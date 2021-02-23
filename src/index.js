import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Plugin/Home";
import Stock from "./Plugin/Stock";
import Cash from "./Plugin/Cash";
import Dash from "./Plugin/Dash";
import Buy from "./Plugin/Buy";
import Nav from "./Plugin/Nav";
import Footer from "./Plugin/Footer";
import Demovid from "./Page/Demovid";
import Intro from "./Plugin/Intro";
import Call from "./Plugin/Call";
import Reg from "./Plugin/Reg";
import Flash from "./Plugin/Flash";
import "halfmoon/css/halfmoon-variables.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Plugin/App.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="bg-very-dark text-white">
          <Flash />
          <Nav />
          <div className="row">
            <div className="col-12 p-3 p-md-5">
              <Route path="/kasir" component={Cash} exact />
              <Route path="/admin" component={Dash} exact />
              <Route path="/stock" component={Stock} exact />
              <Route path="/order" component={Buy} exact />
              <Route path="/gallery" component={Call} exact />
              <Route path="/getstart" component={Intro} exact />
              <Route path="/mesinkasir" component={Reg} exact />
              <Route path="/demo" component={Demovid} exact />
              <Route path="/" component={Home} exact />
            </div>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
