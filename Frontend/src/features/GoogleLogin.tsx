import React, { useState } from "react";
import GoogleButton from "react-google-button";

export default function GoogleLogin() {
  const [loginData, setLoginData] = useState(null);

  const handleSuccess = async (googleData: any) => {
    console.log(googleData);
    const res = await fetch("/api/google-auth", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };

  const handleFailure = (res: any) => {
    alert(JSON.stringify(res));
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  return <div>GoogleLogin</div>;
}
