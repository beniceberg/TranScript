import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { requestTranscript } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(requestTranscript());
  }
  render() {
    return (
      <div className="App">
        <div>AudioContainer</div>
        <div>NotesContainer</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
