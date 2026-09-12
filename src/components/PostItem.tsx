import { formatDate } from '@/lib/utils';
import type { Post } from '@/schemas/post';

type PostItemProps = Pick<Post, 'id'> &
  Pick<Post['data'], 'update' | 'pubDate' | 'title' | 'description' | 'pin'>;

const PostItem = ({ id, title, pubDate, description, pin }: PostItemProps) => {
  return (
    <div className="flex-col mb-4">
      <div className="flex flex-col items-start gap-1">
        {pin && (
          <span className="text-[0.625rem] leading-none px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono tracking-wider">
            Pinned
          </span>
        )}
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
