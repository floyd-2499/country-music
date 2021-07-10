import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import "./file-css/header.css";

class GoogleLogin extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "555154005917-1cls6j5forkauheo5a5odq94272i0pf3.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderButton() {
    if (this.props.isSignedIn === null) {
      return (
        <div>
          <button className="btn">SignIn</button>
        </div>
      );
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button className="btn" onClick={this.onSignOut}>
            SignOut
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="btn" onClick={this.onSignIn}>
            Sign in
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn}
}


export default connect(mapStateToProps, { signIn, signOut })(GoogleLogin);
