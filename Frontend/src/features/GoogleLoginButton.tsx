import { useEffect } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

export default function GoogleLoginButton() {
  const clientId =
    "909732484180-ocavgv1cesa52bq7tm75ed1edsvehok2.apps.googleusercontent.com";

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //     });
  //   };
  //   gapi.load("clientAuth2", initClient);
  // }, []);

  const success = (res: any) => {
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
        className="col-auto"
      />
    </>
  );
}
