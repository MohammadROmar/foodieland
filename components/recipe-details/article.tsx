'use client';

import { useEffect, useRef, type PropsWithChildren } from 'react';

import { useRecipeContext } from '@/store/recipe-details/hooks';

export default function Article({ children }: PropsWithChildren) {
  const ref = useRef<HTMLElement>(null);

  const { setRef } = useRecipeContext();

  useEffect(() => {
    setRef(ref);
  }, []);

  return (
    <article ref={ref} className="space-y-8">
      {children}
    </article>
  );
}
