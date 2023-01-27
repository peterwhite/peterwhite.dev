'use client';

import { useEffect } from 'react';

// This was required required before 13.1.6-canary.1, now scrolling works as expected AFAIK

export default function ForceScrollUp() {
  useEffect(() => {
    if (!window.location.hash) {
      window.document.scrollingElement?.scrollTo(0, 0);
    }
  }, []);

  return null;
}
