import React from "react";
import ReactDOM from "react-dom";
import Main from "/components/main";

const App = () => {
  let hello = "hellow world";
  return <div>{{ hello }}</div>;
};

ReactDOM.render("<App />", document.getElementById("app"), null);
