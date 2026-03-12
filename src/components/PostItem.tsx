import { formatDate } from '@/lib/utils';
import type { Post } from '@/schemas/post';

type PostItemProps = Pick<Post, 'id'> &
  Pick<Post['data'], 'update' | 'pubDate' | 'title'>;

const PostItem = ({ id, title, pubDate }: PostItemProps) => {
  return (
    <div className="flex-col mb-4">
      <div>
        <a
          href={`/posts/${id}`}
          className="font-semibold text-sm hover:underline"
        >
          {title}
        </a>
      </div>
      <time className="text-sm text-muted-foreground">
        {formatDate(pubDate)}
      </time>
    </div>
  );
};

export default PostItem;
