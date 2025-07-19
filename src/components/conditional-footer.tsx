'use client';

import { usePathname } from 'next/navigation';
import Footer from './footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Don't render the regular Footer on the about page since it has its own footer section
  if (pathname === '/about' || pathname === '/') {
    return null;
  }
  
  return <Footer />;
}