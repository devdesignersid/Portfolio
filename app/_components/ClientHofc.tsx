'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';

type ClientHofcProps = {} & PropsWithChildren;

export default function ClientHofc({ children }: ClientHofcProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}
