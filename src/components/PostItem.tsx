import type { Post } from '@/schemas/post';

type PostItemProps = Pick<Post, 'id'> &
  Pick<Post['data'], 'update' | 'pubDate' | 'title'>;

const PostItem = ({ id, title }: PostItemProps) => {
  return (
    <a href={`/posts/${id}`}>
      <div>{title}</div>
    </a>
  );
};

export default PostItem;
