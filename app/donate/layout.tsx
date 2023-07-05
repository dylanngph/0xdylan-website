import React, { Fragment } from "react";
import DonateMainLayout from "@/components/Donate/DonateMainLayout";


const DonateLayout = ({ children }: { children: React.ReactNode }) => {
  return <DonateMainLayout>{children}</DonateMainLayout>;
};

export default DonateLayout;
