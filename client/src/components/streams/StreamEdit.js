import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";

import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    // match.params.id comes as props from React-Router and the path set up in App.js with the :id.
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          // Below there is a Lodash approach and non-lodash. This.props.stream could also be passed as initial values but it would contain id: and userId: as well, which we wouldn't want in a put request.
          // Lodash .pick grabs out of the object the descired keys, so we passed in title, and description, to 'pick' only those out of the object
          initialValues={
            _.pick(this.props.stream, "title", "description")
            // title: this.props.stream.title,
            // description: this.props.stream.description
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
  // console.log(state);
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
