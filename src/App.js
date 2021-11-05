import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const prevName = useRef("");

  // usRef doesnt cause the comp to rerender
  // reference elements inside your html
  // can use to store previous values

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        {" "}
        My name is {name} and used to be {prevName.current}{" "}
      </div>
      <hr />
      <button onClick={focus}> Focus </button>
    </div>
  );
}
