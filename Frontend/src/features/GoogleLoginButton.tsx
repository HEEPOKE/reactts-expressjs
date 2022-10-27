import React, { FunctionComponent, useState } from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

interface GoogleSignInComponentProps {
  loginSuccess: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
}

export const GoogleSignInComponent: FunctionComponent<
  GoogleSignInComponentProps
> = ({ loginSuccess }) => {
  const [loginFailed, setLoginFailed] = useState<boolean>();
  return (
    <GoogleLogin
    //   clientId={`${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}`}
      clientId="909732484180-0rpp0i38rvsriordprhrhfvnflaiods1.apps.googleusercontent.com"
      buttonText="Google"
      onSuccess={loginSuccess}
      onFailure={(response: any) => {
        setLoginFailed(true);
      }}
      cookiePolicy={"single_host_origin"}
      responseType="code,token"
    />
  );
};
