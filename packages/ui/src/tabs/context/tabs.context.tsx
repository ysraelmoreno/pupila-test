"use client";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export interface ITabsProviderProps {
  defaultTab?: string;
  orientation?: string;
}

export interface ITabsContext {
  currentTab: string;
  setSelectedTab: (tab: string) => void;
  orientation?: string;
}

const Context = createContext<ITabsContext>({} as ITabsContext);

export const TabsProvider = ({
  children,
  defaultTab = "",
  orientation,
}: PropsWithChildren<ITabsProviderProps>) => {
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const setSelectedTab = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <Context.Provider value={{ currentTab, setSelectedTab, orientation }}>
      {children}
    </Context.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "You must use the component inside Tabs.Root to use the context."
    );
  }

  return context;
};
