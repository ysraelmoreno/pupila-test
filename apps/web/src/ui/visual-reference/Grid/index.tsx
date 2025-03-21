"use client";
import { useVisualReferences } from "../../../context/visualReference.context";
import { VisualReferencesList } from "./List";
import { CardsList } from "../../../components/CardsList";

export const VisualReferenceGrid = () => {
  const { references, groups, deleteGroup } = useVisualReferences();

  return (
    <CardsList groups={groups} data-testid="visual-reference-grid" onDeleteGroup={deleteGroup}>
      <VisualReferencesList groups={groups} references={references} />
      {...groups?.map((group, i) => (
        <VisualReferencesList
          key={i}
          groups={groups}
          references={references?.filter(
            (reference) => reference.group === group.name
          )}
        />
      ))}
    </CardsList>
  );
};
