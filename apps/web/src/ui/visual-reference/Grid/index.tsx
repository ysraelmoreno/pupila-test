"use client";
import { useVisualReferences } from "../../../context/visualReference.context";
import { VisualReferencesList } from "./List";
import { Tabs } from "@brand-zone/ui";
import { CardsList } from "../../../components/CardsList";

export const VisualReferenceGrid = () => {
  const { references, groups } = useVisualReferences();

  return (
    <CardsList groups={groups}>
      <VisualReferencesList groups={groups} references={references} />
      {groups?.map((group) => (
        <Tabs.Content key={group.id} value={group.id}>
          <VisualReferencesList
            groups={groups}
            references={references?.filter(
              (reference) => Number(reference.groupId) === Number(group.id)
            )}
          />
        </Tabs.Content>
      ))}
    </CardsList>
  );
};
