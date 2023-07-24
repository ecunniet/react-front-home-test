import { Tags } from "../Tags/Tags";
import { TagType } from "../Tags/TagType";

const TagList = ({ tags }: { tags: TagType[] }) => {
  return <Tags tags={tags} />;
};

export default TagList;