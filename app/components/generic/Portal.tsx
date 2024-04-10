"use client"

import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useState } from 'react';

type PortalProps = {
  children: ReactNode;
};

export default function Portal({ children }: PortalProps) {
  const [modalElem, setModalElem] = useState<Element | null>(
    typeof document !== 'undefined' ? document.querySelector('#popup-root') : null
  );

  useEffect(() => {
    setModalElem(document.querySelector('#popup-root'));
  }, []);

  if (!modalElem) {
    return null;
  }

  return createPortal(children, modalElem);
}
