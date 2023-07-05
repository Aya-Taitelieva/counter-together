import React, { useState } from "react";

const Paragraph = ({ addText }) => {
  const [inputVal, setInputVal] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!inputVal.trim()) {
          return;
        }
        const newText = {
          id: Date.now(),
          text: inputVal,
        };

        addText(newText);
        setInputVal("");
      }}>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button className="btn-counter-p">Click!</button>
    </form>
  );
};

export default Paragraph;
