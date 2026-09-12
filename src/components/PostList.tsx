import type { Post } from '@/schemas/post';
import PostItem from './PostItem';

type PostListProps = {
  posts: Post[];
};

const orderByPin = (posts: Post[]) => {
  return [...posts].sort((a, b) => {
    const aPin = a.data.pin;
    const bPin = b.data.pin;
    if (aPin && !bPin) return -1;
    if (!aPin && bPin) return 1;
    if (aPin && bPin) return aPin - bPin;

    return 0;
  });
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <ul>
      {orderByPin(posts).map((post: Post) => {
        const { id, data } = post;
        const { title, update, pubDate, description, draft, pin } = data;

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
              pin={pin}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
