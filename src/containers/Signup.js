import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};


  if (!values.email) {
    errors.email = "Need an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email."
  }
  
  if (!values.password) {
    errors.password = "Need a password.";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Password confirmation.";
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = "Passwords don't match.";
  }

  return errors;
};

class Signup extends React.Component {
  handleFormSubmit = (values) => {
    console.log(values);
  };
  
  renderField = ({input, label, type, meta: {touched, error}}) => (
    <fieldset className="form-group">
      <label>{label}</label>
      <div>
        <input {...input} 
          placeholder={label} 
          className="form-control" 
          type={type}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </fieldset>
  );

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Sign up here</h2>
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field 
              name="email" 
              type="text" 
              component={this.renderField} 
              label="Email"
            />
            <Field 
              name="password" 
              type="password" 
              component={this.renderField} 
              label="Password"
            />
            <Field 
              name="passwordConfirmation" 
              type="password" 
              component={this.renderField} 
              label="Password confirmation" 
            />
            <button action="submit" className="btn btn-primary">Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signup',
  validate
}) (Signup);


// Boilerplate code
// class Signup extends React.Component {
//   render() {
//     return <div>Signup Here</div>;
//   }
// }

// export default Signup;