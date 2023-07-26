import { useCallback, useContext } from "react";
import { TagType } from "../TagType";
import './Tag.css'
import { ActiveFilterContext } from "../../App";

const Tag = ({ tag }: { tag: TagType }) => {
  const { activeFilters, addFilter } = useContext(ActiveFilterContext)
  const selectedTag = activeFilters.includes(tag);

  const onHandleFilter = useCallback(() => {
    if (!selectedTag) addFilter(tag)
  }, [selectedTag])

  return (
    <button
      className="tag-button"
      style={{
        backgroundColor: `${tag.color}`,
      }}
      onClick={onHandleFilter}
    >
      {tag.name.fr}
    </button>
  );
};

export default Tag;