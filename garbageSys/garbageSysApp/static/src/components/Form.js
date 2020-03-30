import React, { Component } from "react";
import ReactDOM from "react-dom";
import css from "./Form.css"
class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }
  
  render() {
      console.log(this.state.value)
    return (
        <div className={css.box}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="input something "
        />
      </div>
    );
  }
}

export default Form;  