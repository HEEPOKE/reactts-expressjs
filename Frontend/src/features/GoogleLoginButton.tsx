import React, { useState } from "react";
import GoogleLogin from "react-google-login";

export default function GoogleLoginButton() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}`}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
