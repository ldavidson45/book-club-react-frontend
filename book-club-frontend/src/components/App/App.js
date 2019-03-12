import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import BookList from "../BookList/BookList";
import Book from "../Book/Book";
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }


  render() {
    return (
      <div>
        <nav>
          <h3>Book Club Library</h3>
        </nav>
        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return <BookList />;
            }}
          />
          <Route
            path="/books/:id"
            exact
            render={props => {
              return <Book {...props} birds={this.state.birds}/>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
