import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamEdit = props => {
  console.log(props);
  // .fetchStream(this.props.match.params.id);

  // Props has history info in here from router.

  return <div></div>;
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
  // console.log(state);
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
