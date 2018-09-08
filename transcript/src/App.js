import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import "./App.css";
import { requestTranscript } from "./actions";
import Editor from "./components/Editor";
import Audio from "./components/Audio";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(requestTranscript());
  }

  handleDownload = () => {
    const htmlCollection = document.getElementById("editor-container").children;
    let segments = Array.from(htmlCollection);
    segments = segments.map(el => {
      let words = Array.from(el.children);
      words = words.map(word => ({
        text: word.innerText.trim().replace("&nbsp;", ""),
        start: word.dataset.start,
        end: word.dataset.end
      }));
      return {
        words,
        speaker: "Amber"
      };
    });

    const json = Object.assign(this.props.script, { segments });

    this.download(JSON.stringify(json), "json.txt", "text/plain");
  };

  download = (content, fileName, contentType) => {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  };

  render() {
    return (
      <div className="App">
        <h1>TranScript</h1>
        <Audio />
        <Editor />
        <Button
          content="DOWNLOAD"
          icon="download"
          onClick={this.handleDownload}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    script: state.script
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
