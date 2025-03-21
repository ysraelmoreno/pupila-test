"use client";
import React from "react";
import styled from "./screen.module.scss";
import { ToolsProvider } from "../../context/tools.context";
import { VisualReferenceGrid } from "./Grid";
import { VisualReferenceProvider } from "../../context/visualReference.context";
import { VisualReferenceHeader } from "./Header";

export const VisualReferenceScreen = () => {
  return (
    <VisualReferenceProvider>
      <div className={styled.screen}>
        <ToolsProvider>
          <VisualReferenceHeader />
          <VisualReferenceGrid />
        </ToolsProvider>
      </div>
    </VisualReferenceProvider>
  );
};
