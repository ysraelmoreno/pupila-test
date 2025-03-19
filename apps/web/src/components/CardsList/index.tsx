import { PropsWithChildren } from "react";
import { Group } from "../../interface/visualReference.interface";
import { Tabs } from "@brand-zone/ui";
import styles from "./styles.module.scss";

export interface CardsListProps {
  groups: Group[];
  children: React.ReactNode[];
}

/**
 * Component that will handle to render all content of the Listing screen (on the current context, visual-reference and color-palettes)
 * Both params corresponds with each other (children and groups).
 * Tabs handle each group with each content based on the index of both params.
 */
export const CardsList = ({
  children,
  groups,
}: PropsWithChildren<CardsListProps>) => {
  return (
    <div className={styles.screen}>
      <Tabs.Root defaultValue="all">
        <Tabs.List>
          <Tabs.Trigger value="all">All</Tabs.Trigger>
          {groups.map((group, i) => (
            <Tabs.Trigger key={group.id} value={String(i)}>
              {group.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value="all">{children[0]}</Tabs.Content>
        {children.slice(1).map((content, i) => (
          <Tabs.Content key={i} value={String(i)}>
            {content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};
