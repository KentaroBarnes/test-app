import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <h2>oauth with:</h2>
      <div>
        <button>
          <a href="http://localhost:9096/authorize?response_type=code&client_id=localClient&redirect_uri=http://localhost:5173/redirectPage">
            Login with app
          </a>
        </button>
      </div>
    </div>
  );
}
