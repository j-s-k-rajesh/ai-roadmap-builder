import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <GoogleOAuthProvider clientId="880535621165-h7viiqma1ba16eb3qkqga21is1ptfg6v.apps.googleusercontent.com">

      <App />

    </GoogleOAuthProvider>

  </React.StrictMode>
);