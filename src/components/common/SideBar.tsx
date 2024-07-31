/**
 * The navigation sidebar for mobile view
 */

import Image from 'next/image';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import UserAvatar from './UserAvatar';

type SideBarProps = {
  navLinks: {
    label: string;
    href: string;
    className?: string;
  }[];
  isLogged: boolean;
  logOut: () => void;
};

const linkClassName = 'text-lg font-semibold text-primary hover:text-gray-900 py-2';

const SideBar = (props: SideBarProps) => {
  const { navLinks, isLogged } = props;
  const username = 'Ky Phan';
  const shortUsername = 'KP';
  return (
    <Sheet>
      <SheetTrigger>
        <Image alt='Hamburger menu' src={'/icons/hamburger.svg'} width={20} height={20} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {isLogged && (
            <div className='flex space-x-3 items-center'>
              <UserAvatar shortUsername={shortUsername} className='w-8 h-8' fallbackClassName='text-sm' />
              <div className='max-w-32 overflow-hidden [&_*]:w-full [&_*]:truncate font-medium'>
                <div>{username}</div>
                <div className='text-sm font-thin flex justify-start'>{'example@gmail.com'}</div>
              </div>
            </div>
          )}
          <SheetTitle className='text-left'>Hi, there</SheetTitle>
          <div className='flex flex-col text-left'>
            {navLinks.slice(0, -1).map((link, index) => (
              <Link key={index} href={link.href} className={cn(linkClassName, link.className)}>
                {link.label}
              </Link>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
