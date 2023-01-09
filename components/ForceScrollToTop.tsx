'use client';

import { useEffect } from 'react';

// This is required as at the time of writing Next13 scrolls the inserted children into view on navigate, not the whole page

export default function ForceScrollUp() {
  useEffect(() => {
    if (!window.location.hash) {
      window.document.scrollingElement?.scrollTo(0, 0);
    }
  }, []);

  return null;
}
