import type { Post } from '@/schemas/post';
import PostItem from './PostItem';

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <ul>
      {posts.map((post: Post) => {
        const { id, data } = post;
        const { title, update, pubDate, description } = data;
        return (
          <li key={id}>
            <PostItem
              id={id}
              title={title}
              update={update}
              pubDate={pubDate}
              description={description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
