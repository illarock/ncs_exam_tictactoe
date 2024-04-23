"use client";
import React, { PropsWithChildren } from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore, RootState } from "../lib/store";

import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    // Automatically create a store instance if no store was passed in
    store = makeStore(),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
