import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { setDefaultResultOrder } from "dns";

export default function GoogleLoginButton() {
  const [user, setUser] = useState([]);

  const clientId =
    "203320795555-scusrjuu1d5uv37cpncjd0bpkc9i1f2j.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:Auth2", initClient);
  }, []);

  const success = (res: any) => {
    setUser(res.userObj);
    console.log("success", res);
  };

  const error = (res: any) => {
    console.error("error", res);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        onSuccess={success}
        onFailure={error}
        buttonText="Login with Google"
        cookiePolicy={"single"}
        isSignedIn={true}
        className="col-auto"
      />
    </>
  );
}
