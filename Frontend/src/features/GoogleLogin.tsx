import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import googleLoginService from "../services/googleLoginService";

export default function GoogleLogin() {
  return (
    <div >
      <h1>Login With Google</h1>
      <GoogleLogin
        clientId={`${process.env.CLIENT_ID}`}
        buttonText="Login with Google"
        onSuccess={async (response: any) => {
          const tokens = await googleLoginService(response);
          if (!tokens) {
            alert("Error while logging in w/Google 1 ")
          } else {
            // put login logic (i.e. navigating to dashboard page, fetching user from backend
            // using the new access token, etc
          }
        }}
        onFailure={(response: any) => {
          alert("Error while logging in w/Google 2")
        }}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
