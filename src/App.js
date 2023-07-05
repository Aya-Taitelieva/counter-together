import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";
import ParagraphList from "./components/ParagraphList";

function App() {
  const [text, setText] = useState([]);
  function addText(txt) {
    setText([...text, txt]);
  }
  return (
    <div className="App">
      <Paragraph addText={addText} />
      <ParagraphList text={text} />
    </div>
  );
}

export default App;
