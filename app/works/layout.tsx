import React, { Fragment } from "react";
import {LayoutWorks as MainLayout} from "@/components/Works/Works";


const WorksLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default WorksLayout;
