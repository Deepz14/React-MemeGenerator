import React from "react";
import "./styles.css";
import { Navbar } from "./components/Navbar";
import { InputField } from "./components/InputField";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <InputField />
    </div>
  );
}
