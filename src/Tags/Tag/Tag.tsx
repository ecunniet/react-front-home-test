import { useCallback, useContext } from "react";
import { TagType } from "../TagType";
import './Tag.css'
import { ActiveFilterContext } from "../../App";

export const Tag = ({ tag }: { tag: TagType }) => {
  const { activeFilters, addFilter } = useContext(ActiveFilterContext)
  const selectedTag = activeFilters.includes(tag.id);

  const onHandleFilter = useCallback(() => {
    if (!selectedTag) addFilter(tag.id)
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
