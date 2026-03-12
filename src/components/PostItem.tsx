import { formatDate } from '@/lib/utils';
import type { Post } from '@/schemas/post';

type PostItemProps = Pick<Post, 'id'> &
  Pick<Post['data'], 'update' | 'pubDate' | 'title' | 'description'>;

const PostItem = ({ id, title, pubDate, description }: PostItemProps) => {
  return (
    <div className="flex-col mb-4">
      <div>
        <a
          href={`${import.meta.env.BASE_URL}posts/${id}`}
          className="font-semibold text-sm hover:underline line-clamp-2"
        >
          {title}
        </a>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>
      <time className="text-sm text-muted-foreground">
        {formatDate(pubDate)}
      </time>
    </div>
  );
};

export default PostItem;
