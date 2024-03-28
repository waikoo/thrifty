"use client"
import { useRef, useState } from 'react';
import { twMerge as tm } from 'tailwind-merge';

import useEventListener from '@/app/components/hooks/useEventListener';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import getLangAndGender from '@/utils/getLangAndGender';
import { useUIStore } from '@/state/uiState';

type MenuItemProps = {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  children: React.ReactNode;
  loading?: boolean;
  href: string
  Img?: React.ComponentType<{ isHovered: boolean }>;
};

export default function MenuItem({ children, className, onClick, Img, loading, href }: MenuItemProps) {
  const menuItemContainer = useRef<HTMLAnchorElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { lang, gender } = getLangAndGender(usePathname())
  const { setShowMyAccount } = useUIStore()
  const router = useRouter()

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

  function closeMenu(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    if (children === 'Log Out') {
      e.preventDefault()
      router.refresh()
    }
    setShowMyAccount(false)
  }

  return (
    <Link
      href={`/${lang}/${gender}/${href}`}
      className={tm("flex items-center", className)}
      ref={menuItemContainer}
      onClick={closeMenu}
    >
      {Img ? (<Img
        isHovered={isHovered}
      />) : null}


      <li className={tm(
        `whitespace-no-wrap w-max p-5 ${children === 'Log Out' ? 'px-1' : ''}`,
        loading && "bg-bkg"
      )} onClick={onClick}>
        {children}
      </li>
    </Link>
  );
}

