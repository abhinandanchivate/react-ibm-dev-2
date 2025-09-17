import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { setupListener } from "./redux/middlewareListener.js";

function BootstrapListener() {
  const navigate = useNavigate();
  useEffect(() => {
    setupListener(navigate);
  }, [navigate]);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <BootstrapListener />
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
