import React, { Fragment } from "react";
import {LayoutBlogs as MainLayout} from "@/components/Blogs/Blogs";


const BlogsLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default BlogsLayout;
