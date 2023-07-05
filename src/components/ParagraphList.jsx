import React from "react";
import Paragraph from "./Paragraph";
import ParagraphItem from "./ParagraphItem";

const ParagraphList = ({ text }) => {
  return (
    <div>
      {text.map((item) => (
        <ParagraphItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ParagraphList;
