import React, { Component } from "react";

import Path from "../../Components/UI/Path/Path";
import HamburgerMenu from "../../Components/ButtonsTRBL/HamburgerMenu/HamburgerMenu";
import Logo from "../../Components/Logo/Logo";
import styles from "./Contact.module.css";

class Contact extends Component {
  state = {
    newMessage: { name: "", email: "", message: "" },
    boolButton: false,
    nameErr: ""
  };

  validateForm = () => {
    let name = this.state.newMessage.name;
    let regexAllLetters = /([0-9`~!@#$%^&*()-=_+[\];',./{}:"<>?\\])/gi;
    let regexSpace = /^(\s?\w+)+\s?$/;
    if (name.search(regexAllLetters) !== -1) {
      this.setState({ boolButton: true, nameErr: "Invalid name" });
    } else if (name === "") {
      this.setState({ boolButton: true });
    } else if (!regexSpace.test(name)) {
      this.setState({
        boolButton: true,
        nameErr: "Too many spaces"
      });
    } else {
      this.setState({ boolButton: false, nameErr: "" });
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
    }, this.validateForm);
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
      <div className={styles.gridContainer}>
        <div className={styles.childPath}>
          <Path pathName={"CONTACT"} />
        </div>
        <div className={styles.childHamburger}>
          <HamburgerMenu />
        </div>
        <div className={styles.childLogo}>
          <Logo />
        </div>
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
            {!this.state.boolButton ? null : <span>{this.state.nameErr}</span>}

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
              rows="8"
              cols="33"
              placeholder="Enter a message"
              spellCheck={true}
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
        </div>
      </div>
    );
  }
}

export default Contact;
