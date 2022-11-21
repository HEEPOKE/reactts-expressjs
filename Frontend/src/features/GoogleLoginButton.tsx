import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
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

  const success = (res: any) => {
    setProfileData(res.profileObj);
    // console.log("success", res);
    // refreshTokenSetup(res);
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
        onSuccess={success}
        onFailure={error}
        buttonText="Login with Google"
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className="col-auto"
      />
    </>
  );
}
