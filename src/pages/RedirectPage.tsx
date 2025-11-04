import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function RedirectPage() {
  const [email, setEmail] = useState("No Email yet");
  const hasExchanged = useRef(false);

  useEffect(() => {
    if (hasExchanged.current) return;
    hasExchanged.current = true;

    handleExchangeCode();
  }, []);

  const handleExchangeCode = async () => {
    try {
      const code = new URLSearchParams(window.location.search).get("code");

      if (!code) {
        console.error("No authorization code found in URL");
        return;
      }

      console.log("Exchanging code..."); // DEBUG

      const response = await axios.post(
        "http://localhost:9096/exchange-token",
        new URLSearchParams({ code: code }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        }
      );

      console.log("Token exchange successful:", response.data);

      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (error) {
      console.error(
        "Token exchange failed:",
        error.response?.data || error.message
      );
    }
  };

  const getEmail = async () => {
    try {
      const response = await axios.get("http://localhost:9096/api/email", {
        withCredentials: true,
      });
      setEmail(response.data.email);
    } catch (error) {
      console.error("Get email failed:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Redirect Page</h1>
      <p>This is the redirect page after login.</p>
      <button onClick={getEmail}>Click here for your email</button>
      <p>Your email is: {email}</p>
    </div>
  );
}
