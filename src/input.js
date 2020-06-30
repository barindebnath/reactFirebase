import React from "react";
import firebaseDb from "./firebase";

export const Input = () => {
  const changeHandler = (value) => {
    firebaseDb.ref().set({
      input: value,
    });
  };

  return (
    <div id="ipDiv">
      <input className="input" placeholder="Type Here" onChange={(e) => changeHandler(e.target.value)} />
    </div>
  );
};
