import React, { Component } from "react";
import { connect } from "react-redux";
import { getScript } from "../selector";

class Editor extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.htmlScript !== nextProps.htmlScript) {
      document.getElementById("editor-container").innerHTML =
        nextProps.htmlScript;
    }
    if (this.props.time !== nextProps.time) {
      const htmlCollection = document.getElementById("editor-container")
        .children;
      const segments = Array.from(htmlCollection);
      segments.forEach(el => {
        const words = Array.from(el.children);
        words.forEach(word => {
          if (word.dataset.start < nextProps.time) {
            word.setAttribute("style", "background-color: #E6F0F4;");
          }
        });
      });
    }
  }
  render() {
    return <div className="editor" id="editor-container" contentEditable />;
  }
}

const mapStateToProps = state => {
  return {
    htmlScript: getScript(state),
    time: state.time
  };
};

export default connect(mapStateToProps)(Editor);
