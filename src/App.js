import React from "react";
import "./index.css";
import Form from "./components/Form";
import Services from "./components/Services";

function App() {
  return (
    <div className="main">
      <div className="app-container">
      <Form />
      <Services />
    </div>
    </div>
  );
}

export default App;
