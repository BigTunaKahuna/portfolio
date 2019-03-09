import React, { Component } from "react";

import Path from "../../Components/UI/Path/Path";
import styles from "./Contact.module.css";

class Contact extends Component {
  state = {
    newMessage: { name: "", email: "", message: "" },
    boolButton: true,
    nameErrMsg: ""
  };

  validateName = () => {
    let name = this.state.newMessage.name;
    let email = this.state.newMessage.email;
    let message = this.state.newMessage.message;
    let regexAllLetters = /([0-9`~!@#$%^&*()-=_+[\];',./{}:"<>?\\])/gi;
    let regexSpace = /^(\s?\w+)+\s?$/;
    if (name.search(regexAllLetters) !== -1) {
      this.setState({ boolButton: true, nameErrMsg: "Invalid name" });
    } else if (name === "") {
      this.setState({ boolButton: true, nameErrMsg: "" });
    } else if (!regexSpace.test(name)) {
      this.setState({
        boolButton: true,
        nameErrMsg: "You have too many spaces"
      });
    } else {
      this.setState({ boolButton: false, nameErrMsg: "" });
    }
    console.log(name.search(regexAllLetters));
  };

  handleInput = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState(prevState => {
      return {
        newMessage: {
          ...prevState.newMessage,
          [name]: value
        }
      };
    }, this.validateName);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let messageData = this.state.newMessage;

    fetch("https://mavrichicosmin-21d24.firebaseio.com/.json", {
      method: "POST",
      body: JSON.stringify(messageData),
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Succes", data);
      });
    });
    this.setState({
      newMessage: {
        name: "",
        email: "",
        message: ""
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Path pathName={"CONTACT"} />
        <div className={styles.Form}>
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter name"
              spellCheck="false"
              onChange={this.handleInput}
              value={this.state.newMessage.name}
            />
            {this.state.nameErrMsg}

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@email.com"
              onChange={this.handleInput}
              value={this.state.newMessage.email}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              required
              id="message"
              name="message"
              type="text"
              rows="5"
              cols="33"
              placeholder="..."
              onChange={this.handleInput}
              value={this.state.newMessage.message}
            />

            <button
              type="submit"
              onSubmit={this.handleFormSubmit}
              disabled={this.state.boolButton}
            >
              Send
            </button>
          </form>
          <p>
            Name:{this.state.newMessage.name}, Email:
            {this.state.newMessage.email}, Message:
            {this.state.newMessage.message}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
