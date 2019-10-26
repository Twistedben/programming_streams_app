import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";

import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  // Due to the form below having an onSubmit prop with handleSubmit from redux forms, we get passed all the inputs' values on submission in an argument to the  helper below
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      // Since Redux Forms has the handleSubmit prop on our props, we use that and provide it with our helper function as an argument.
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
