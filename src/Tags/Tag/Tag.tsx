import { useState } from "react";
import { TagType } from "../TagType";
import './Tag.css'

export const Tag = ({ tag }: { tag: TagType }) => {
  const [selectedTag, setSelectedTag] = useState("");
  return (
    <div
      className="tag-button"
      style={{
        backgroundColor: `${tag.color}`
      }}
    >
      {tag.name.fr}
    </div >
  );
};
