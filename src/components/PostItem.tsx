import { formatDate } from '@/lib/utils';
import type { Post } from '@/schemas/post';
import { Item, ItemContent, ItemDescription, ItemTitle } from './ui/item';

type PostItemProps = Pick<Post, 'id'> &
  Pick<Post['data'], 'update' | 'pubDate' | 'title'>;

const PostItem = ({ id, title, pubDate }: PostItemProps) => {
  return (
    <Item asChild>
      <a href={`/posts/${id}`}>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{formatDate(pubDate)}</ItemDescription>
        </ItemContent>
      </a>
    </Item>
  );
};

export default PostItem;
