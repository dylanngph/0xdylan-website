import React, { Fragment } from "react";
import {LayoutBlog as MainLayout} from "@/components/Blog/Blog";


const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default BlogLayout;
