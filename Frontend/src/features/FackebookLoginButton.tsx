import React from "react";
import FacebookLogin from "react-facebook-login";

export default class FacebookLoginButton extends React.Component {
  responseFacebook(response: any) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="1164073600984912"
        // autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
        icon="fa-facebook mx-2"
        cssClass="btn FacebookIcon text-white col-6"
      />
    );
  }
}
