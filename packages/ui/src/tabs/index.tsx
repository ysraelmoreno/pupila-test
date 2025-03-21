"use client";
import React, { PropsWithChildren } from "react";
import {
  List as TabsList,
  Content as TabsContent,
  TabsTriggerProps,
  TabsProps,
  TabsContentProps,
} from "@radix-ui/react-tabs";
import { TabsRootContainer, TabsTrigger } from "./styles";

const Root = ({
  children,
  orientation = "horizontal",
  defaultValue,
  ...props
}: PropsWithChildren<TabsProps>) => {
  return (
    <TabsRootContainer
      orientation={orientation}
      defaultValue={defaultValue}
      {...props}
    >
      {children}
    </TabsRootContainer>
  );
};

const List = ({ children, ...props }: PropsWithChildren) => {
  return <TabsList {...props}>{children}</TabsList>;
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
