import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import debounce from "debounce";
import { setCurrentTime } from "../actions";

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      percent: 0
    };
  }

  componentDidMount() {
    const audio = document.getElementById("myAudio");
    audio.addEventListener("timeupdate", this.updateTime);
  }

  componentWillUnMount() {
    const audio = document.getElementById("myAudio");
    audio.removeEventListener("timeupdate");
  }

  playSound = () => {
    const audio = document.getElementById("myAudio");
    this.setState({ playing: true });
    audio.play();
    console.log(audio.duration);
  };
  pauseSound = () => {
    const audio = document.getElementById("myAudio");
    this.setState({ playing: false });
    audio.pause();
  };
  stopSound = () => {
    const audio = document.getElementById("myAudio");
    this.setState({ playing: false });
    audio.pause();
    audio.currentTime = 0;
    this.props.dispatch(setCurrentTime(0));
  };

  updateTime = () => {
    const currentTime = document.getElementById("myAudio").currentTime;
    const duration = document.getElementById("myAudio").duration;
    const percent = Math.round((currentTime / duration) * 100);
    debounce(() => {
      this.setState({
        currentTime: currentTime,
        percent
      });
    }, 200);
    this.props.dispatch(setCurrentTime(currentTime));
    document
      .getElementById("sound")
      .setAttribute("style", `width: ${percent}%;`);
  };

  render() {
    const { playing } = this.state;
    return (
      <div id="audio-container">
        <audio
          src="https://s3-eu-west-1.amazonaws.com/public-amb/demo_english_final.mp3"
          id="myAudio"
        />
        {playing ? (
          <Fragment>
            <Button
              content="STOP"
              className="button-stop"
              color="red"
              onClick={this.stopSound}
              icon="stop"
            />
            <Button
              content="PAUSE"
              className="button-stop"
              color="yellow"
              onClick={this.pauseSound}
              icon="pause"
            />
          </Fragment>
        ) : (
          <Button
            content="PLAY"
            className="button-start"
            primary
            onClick={this.playSound}
            icon="play"
          />
        )}
        <div className="soundbar">
          <div className="sound" id="sound" />
        </div>
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
)(Audio);
