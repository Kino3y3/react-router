import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, User, Posts } from "pages";
import Menu from "components/Menu";
import MenuStyle from "components/MenuStyle";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <MenuStyle />
        <hr />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route exact path="/user" component={User} />
        <Route path="/user/:name" component={User} />
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

export default App;
