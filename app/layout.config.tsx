import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { AlbumIcon, Book, Heart, LayoutTemplate } from "lucide-react";


export const linkItems: LinkItemType[] = [
  {
    icon: <Book />,
    text: "文档中心",
    url: "/docs/Base",
    active: "nested-url",
  },
];

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="https://reactnative.cn/img/header_logo.svg"
          alt=""
          className=" w-8 h-8"
        />
        BuildDream - React
      </>
    ),
  },

  links: [],
};
