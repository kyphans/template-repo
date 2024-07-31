import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type UserAvatarProps = {
  shortUsername?: string;
  imageUrl?: string;
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
};

const UserAvatar = (props: UserAvatarProps) => {
  const { shortUsername, imageUrl, className, imageClassName, fallbackClassName } = props;
  return (
    <Avatar className={className}>
      <AvatarImage src={imageUrl} className={cn(imageClassName)} />
      <AvatarFallback className={cn('font-medium bg-green-700 text-primary-foreground', fallbackClassName)}>
        {shortUsername}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
