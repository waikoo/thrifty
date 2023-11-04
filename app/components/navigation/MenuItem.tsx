"use client"
import React, { useRef, useState } from 'react';
import { twMerge as tm } from 'tailwind-merge';
import useEventListener from '../hooks/useEventListener';

type MenuItemProps = {
  className?: string;
  color: string;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  children: React.ReactNode;
  loading?: boolean;
  Img?: React.ComponentType<{ color: string, isHovered: boolean }>;
};

export default function MenuItem({ children, className, onClick, Img, color, loading }: MenuItemProps) {
  const menuItemContainer = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <div
      className={tm("flex items-center", className)}
      ref={menuItemContainer}
    >
      {Img ? (<Img color={color}
        isHovered={isHovered}
      />) : null}


      <li className={tm(
        `whitespace-no-wrap w-max p-5 ${!Img ? 'pr-12' : ''}`,
        loading && "bg-bkg"
      )} onClick={onClick}>
        {children}
      </li>
    </div>
  );
}

