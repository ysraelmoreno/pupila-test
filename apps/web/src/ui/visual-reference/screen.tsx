"use client";
import React from "react";
import { Tools } from "./Tools";
import styled from "./screen.module.scss";
import { ToolsProvider } from "../../context/tools.context";
import { VisualReferenceGrid } from "./Grid";
import { VisualReferenceProvider } from "../../context/visualReference.context";

export const VisualReferenceScreen = () => {
  return (
    <VisualReferenceProvider>
      <div className={styled.screen}>
        <ToolsProvider>
          <Tools />
        </ToolsProvider>
        <VisualReferenceGrid />
      </div>
    </VisualReferenceProvider>
  );
};
