import React from "react";
import { Field, reduxForm } from "redux-form"; // reduxForm is a lot like connect(). Adds a bunch to props

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : "field"}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  // Due to the form below having an onSubmit prop with handleSubmit from redux forms, we get passed all the inputs' values on submission in an argument to the  helper below
  // Expects the parent component to pass down onSumbit callback and values passed in by formValues
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      // Since Redux Forms has the handleSubmit prop on our props, we use that and provide it with our helper function as an argument.
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Form values from the onSubmit will be passed in here too for validation. Rreturning an empty object says everything is OK
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must provide a Stream title";
  }
  if (!formValues.description) {
    errors.description = "You must provide a Stream description";
  }
  return errors;
};

// METHOD 1: Of hooking up redux connect and redux form
// export default connect()(reduxForm({
//   form: "streamCreate",
//   validate: validate
// })(StreamCreate));
//METHOD 2: Connecting Redux connect and form by creating a constant and just passing in to connect's paramater
export default reduxForm({
  form: "streamForm",
  validate: validate
})(StreamForm);
