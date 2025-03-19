"use client";
import React, { PropsWithChildren } from "react";
import {
  List as TabsList,
  Content as TabsContent,
  TabsTriggerProps,
  TabsProps,
  TabsContentProps,
} from "@radix-ui/react-tabs";
import { TabsProvider } from "./context/tabs.context";
import { TabsRootContainer, TabsTrigger } from "./styles";

const Root = ({
  children,
  orientation = "horizontal",
  defaultValue,
  ...props
}: PropsWithChildren<TabsProps>) => {
  return (
    <TabsProvider defaultTab={defaultValue}>
      <TabsRootContainer
        orientation={orientation}
        defaultValue={defaultValue}
        {...props}
      >
        {children}
      </TabsRootContainer>
    </TabsProvider>
  );
};

const List = ({ children }: PropsWithChildren) => {
  return <TabsList>{children}</TabsList>;
};

const Trigger = ({
  children,
  value,
  ...props
}: PropsWithChildren<TabsTriggerProps>) => {
  return (
    <TabsTrigger value={value} {...props}>
      {children}
    </TabsTrigger>
  );
};

const Content = ({
  children,
  value,
  ...props
}: PropsWithChildren<TabsContentProps>) => {
  return (
    <TabsContent value={value} {...props}>
      {children}
    </TabsContent>
  );
};

export { Root, List, Trigger, Content };
