import React, { useState, useEffect } from "react";
import firebaseDb from "./firebase";

export const Textbox = () => {
  const [text, setText] = useState();
  // var text = "new Text";
  useEffect(() => {
    firebaseDb
      .ref("input/")
      .once("value")
      .then((snapshot) => {
        setText(snapshot.val());
      });
    firebaseDb.ref("input/").on("value", (snapshot) => {
      setText(snapshot.val());
      // console.log(snapshot.val());
    });
  });
  const items = [];
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  for (var i = 0; i < 20; i++) {
    var x = Math.random() * 5 + 1;
    var divStyle = {
      // left: -x / 5 + "em",
      color: getRandomColor(),
      padding: x - 5 + "rem",
      margin: x + "px",
      fontSize: x + "em",
    };
    items.push(<li style={divStyle}>{text}</li>);
  }
  return (
    <div id="itemsDiv">
      <ul>{items}</ul>
    </div>
  );
};
