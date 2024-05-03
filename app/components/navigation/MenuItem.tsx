"use client"
import { useRef, useState } from 'react';
import { twMerge as tm } from 'tailwind-merge';

import useEventListener from '@/app/components/hooks/useEventListener';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import getLangAndGender from '@/utils/getLangAndGender';
import { albert_900 } from '@/utils/fonts';

type MenuItemProps = {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  children: React.ReactNode;
  loading?: boolean;
  href: string
};

export default function MenuItem({ children, className, onClick, loading, href }: MenuItemProps) {
  const menuItemContainer = useRef<HTMLAnchorElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { lang, gender } = getLangAndGender(usePathname())

  useEventListener({
    eventType: "mouseover",
    listener: () => setIsHovered(true),
    target: menuItemContainer.current,
  });

  useEventListener({
    eventType: "mouseout",
    listener: () => setIsHovered(false),
    target: menuItemContainer.current,
  });

  return (
    <Link
      href={`/${lang}/${gender}/${href}`}
      className={tm("flex items-center", className)}
      ref={menuItemContainer}
    >

      <li className={tm(
        `whitespace-no-wrap p-2 ${children === 'Log Out' ? 'px-1' : ''}`,
        loading && "bg-bkg",
        isHovered && albert_900.className
      )} onClick={onClick}
      >
        {children}
      </li>
    </Link>
  );
}

