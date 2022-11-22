import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { refreshTokenSetup } from "../utils/refreshToken";

export default function GoogleLoginButton() {
  const [profileData, setProfileData] = useState(
    localStorage.getItem('profileData') 
    ? JSON.parse(localStorage.getItem('profileData') || '{}' ) 
    : null
  );

  const clientId = "203320795555-scusrjuu1d5uv37cpncjd0bpkc9i1f2j.apps.googleusercontent.com";
  // const clientId = process.env.CLIENT_ID;
  
  useEffect(() => {
    function initClient() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", initClient);
  }, []);

  const handleLogin = async (res: any) => {
    const login = axios({
      method: 'get',
      url: 'http://bit.ly/2mTM3nY',
      responseType: 'json'
    })
      .then(function (res) {
        
      });
    setProfileData(res.profileObj);
  };

  const error = (res: any) => {
    console.error("error", res);
  };

  const logout = () => {
    setProfileData(null as any);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        onSuccess={handleLogin}
        onFailure={error}
        buttonText="Login with Google"
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className="mt-2 col-sm-12 col-md-12 col-lg-12 col-xl-12"
      />
    </>
  );
}
