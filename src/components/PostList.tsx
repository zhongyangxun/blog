import type { Post } from '@/schemas/post';
import PostItem from './PostItem';

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <ul>
      {posts.map((post: Post, index) => {
        const { id, data } = post;
        const { title, update, pubDate, description, draft } = data;

        if (import.meta.env.PROD && draft) {
          return null;
        }

        const titlePrefix = draft ? '[DRAFT] ' : '';

        return (
          <li key={id}>
            <PostItem
              id={id}
              title={`${titlePrefix} ${title}`}
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
