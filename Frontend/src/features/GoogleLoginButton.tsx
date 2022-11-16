import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

export default function GoogleLoginButton() {
  const clientId =
    "617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com";

  const success = (res: any) => {
    console.log(res);
  };

  const error = (res: any) => {
    console.error(res);
  };

  const loading = () => {
    console.log("loading");
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        onSuccess={success}
        onFailure={error}
        onRequest={loading}
        responseType="id_token"
        isSignedIn
      />
    </>
  );
}
