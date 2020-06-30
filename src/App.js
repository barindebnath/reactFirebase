import React from "react";
import "./App.css";
import { Textbox } from "./Textbox";
import { Input } from "./input.js";

export const App = () => {
  return (
    <div id="opDiv">
      <Textbox />
      <Input />
    </div>
  );
};
