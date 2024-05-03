"use client"
import { useState } from 'react'

export default function useMouseLeave() {
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setLastMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const getDirection = (from: { x: number, y: number }, to: { x: number, y: number }) => {
    if (to.y < from.y) return 'up';
    if (to.y > from.y) return 'down';
    if (to.x < from.x) return 'left';
    if (to.x > from.x) return 'right';
  };
  return {
    lastMousePosition,
    handleMouseMove,
    getDirection
  }
}

