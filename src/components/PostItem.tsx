import { formatDate } from '@/lib/utils';
import type { Post } from '@/schemas/post';

type PostItemProps = Pick<Post, 'id'> &
  Pick<Post['data'], 'update' | 'pubDate' | 'title' | 'description' | 'pin'>;

const PostItem = ({ id, title, pubDate, description, pin }: PostItemProps) => {
  return (
    <div className="mb-4 flex-col">
      <div className="flex flex-col items-start gap-1">
        {pin && (
          <span className="bg-muted text-muted-foreground rounded px-1.5 py-0.5 font-mono text-[0.625rem] leading-none tracking-wider">
            Pinned
          </span>
        )}
        <a
          href={`${import.meta.env.BASE_URL}posts/${id}`}
          className="line-clamp-2 text-sm font-semibold hover:underline"
        >
          {title}
        </a>
      </div>
      <p className="text-muted-foreground line-clamp-2 text-sm">
        {description}
      </p>
      <time className="text-muted-foreground text-sm">
        {formatDate(pubDate)}
      </time>
    </div>
  );
};

export default PostItem;
