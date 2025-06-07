import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return(
      <HomeLayout 
        {...baseOptions}
         links={[
          ...linkItems
         ]}
      >
        {children}
      </HomeLayout> 
  );
}
