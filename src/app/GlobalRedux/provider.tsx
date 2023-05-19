"use client";

import { Provider } from "react-redux";
import { FC, ReactNode } from "react";
import store from "./store";

export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
