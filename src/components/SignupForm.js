import React from "react";
import { addEmail } from "../services/api";

export default class SignupForm extends React.Component {
  state = {
    email: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    addEmail({ email: this.state.email }).then(json => {
      if (json.errors) {
        alert("Please provide a valid email");
      } else {
        alert("Thanks for signing up!");
      }
    });
    this.setState({ email: "" });
  };

  handleChange = e => {
    this.setState({ email: e.target.value });
  };
  render() {
    return (
      <div className="signup-form">
        <form action="" onSubmit={this.handleSubmit}>
          <input
            id="inputbox"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter Email"
          />
          <input id="submitbutton" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}
