import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
      <RootProvider
        i18n={{
          locale: 'cn',
          locales: [
            {
              name: 'English',
              locale: 'en',
            },
            {
              name: 'Chinese',
              locale: 'cn',
            },
          ],
          translations: {
            toc: '本页内容',
            search: '搜索文档',
            lastUpdate: '最后更新于',
            searchNoResult: '未查找到结果',
            previousPage: '上一页',
            nextPage: '下一页',
            chooseLanguage: '选择语言',
            chooseTheme: '选择主题',
          }
        }}
      >
        {children}
      </RootProvider>
      </body>
    </html>
  );
}
