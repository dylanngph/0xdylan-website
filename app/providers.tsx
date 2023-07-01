"use client";

import React from "react";
import { UiProviders } from "@/providers/UiProvider";
import Web3Provider from "@/providers/Web3Provider";
import QueryProvider from "@/providers/QueryProvider";
import LocalStorageProvider from "@/providers/LocalStorageProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Web3Provider>
      <LocalStorageProvider>
        <QueryProvider>
          <UiProviders>
          {children}
          </UiProviders>
        </QueryProvider>
      </LocalStorageProvider>
    </Web3Provider>
  );
};

export default Providers;
