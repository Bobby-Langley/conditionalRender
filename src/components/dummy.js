import React from "react";
import User from "./user";

class Dummy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    const { isLoggedIn } = this.state;

    return (
      <>
        <h1>Hello {isLoggedIn ? "User" : "Guest"}</h1>
        <button onClick={() => this.setState({ isLoggedIn: !isLoggedIn })}>
          {isLoggedIn ? "Logout" : "Sign In"}{" "}
        </button>
        <User isLoggedIn={isLoggedIn} name={"Bobby"} />
      </>
    );
  }
}

export default Dummy;
