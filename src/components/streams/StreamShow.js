import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
    this.buildPlayer();
  }
  // Just in case we don't have access to the stream, we are going to fetch it on the fly, we use the lifecycle method below to call build player again.
  componentDidUpdate() {
    this.buildPlayer();
  }
  // Stops streaming video and element when navigated away
  componentWillUnmount() {
    this.player.destroy();
  }

  // We ensure that we attach the player once the video has been loaded and stream has been fetched. We could wrap the title and description in return using the Flow control logic instead or put better flow control on componentDidMount as alternative approaches.
  buildPlayer() {
    // Ensures the player doesn't rebuild multiple times in our lifecycle methods.
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;

    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
