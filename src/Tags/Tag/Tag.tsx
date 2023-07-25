import { useCallback, useContext, useState } from "react";
import { TagType } from "../TagType";
import './Tag.css'
import { ActiveFilterContext } from "../../App";

export const Tag = ({ tag }: { tag: TagType }) => {
  const { addFilter } = useContext(ActiveFilterContext)
  const [selectedTag, setSelectedTag] = useState(false);

  const onHandleFilter = useCallback(() => {
    if (!selectedTag) addFilter(tag.id)
    setSelectedTag(!selectedTag)
  }, [selectedTag])

  return (
    <button
      className="tag-button"
      style={{
        backgroundColor: `${tag.color}`,
        opacity: selectedTag ? 1 : 0.5,
      }}
      onClick={onHandleFilter}
    >
      {tag.name.fr}
    </button>
  );
};
