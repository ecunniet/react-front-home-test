import Tag from "./Tag/Tag";
import { TagType } from "./TagType";
import './Tags.css'

const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <div className="tags-container">
      {tags.map((obj) => (
        <Tag tag={obj} key={obj.id} />
      ))}
    </div>
  );
};

export default Tags;