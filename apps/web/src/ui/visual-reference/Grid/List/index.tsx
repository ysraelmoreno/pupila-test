"use client";
import {
  Group,
  VisualReference,
} from "../../../../interface/visualReference.interface";
import { Reference } from "../Reference";
import styles from "./styles.module.scss";

export interface ReferencesListProps {
  references: VisualReference[];
  groups: Group[];
}

export const VisualReferencesList = ({
  references,
  groups,
}: ReferencesListProps) => {
  return (
    <div className={styles.cardContainer}>
      {references?.map((reference) => (
        <Reference key={`${reference.id}`} data-testid={`reference-${reference.id}`} {...reference} groups={groups} />
      ))}
    </div>
  );
};
