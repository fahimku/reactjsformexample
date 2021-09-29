import React, { Component } from "react";

class App extends React.Component {
  state = {
    form: {
      username: "",
      password: ""
    }
  };

  handleChange = (event) => {
    let { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  handleSubmit = (event) => {
    alert(
      "username: " +
        this.state.form.username +
        "\n" +
        "password: " +
        this.state.form.password
    );
    event.preventDefault();
  };

  render() {
    console.log(this.state.form, "dfd");
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.form.username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.form.password}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
