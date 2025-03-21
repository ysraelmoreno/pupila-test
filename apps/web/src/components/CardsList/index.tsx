import { PropsWithChildren } from "react";
import { Group } from "../../interface/visualReference.interface";
import { Tabs } from "@brand-zone/ui";
import styles from "./styles.module.scss";
import { TrashIcon } from "@radix-ui/react-icons";

export interface CardsListProps {
  groups: Group[];
  children: React.ReactNode[];
  onDeleteGroup: (id: string) => void;
}

/**
 * Component that will handle to render all content of the Listing screen (on the current context, visual-reference and color-palettes)
 * Both params corresponds with each other (children and groups).
 * Tabs handle each group with each content based on the index of both params.
 */
export const CardsList = ({
  children,
  groups,
  onDeleteGroup,
  ...props
}: PropsWithChildren<CardsListProps>) => {
  return (
    <div className={styles.screen} {...props}>
      <Tabs.Root defaultValue="all">
        <Tabs.List className={styles.tabsList}>
          {groups.length > 0 && <Tabs.Trigger value="all">All</Tabs.Trigger>}
          {groups.map((group, i) => (
            <>
            <Tabs.Trigger className={styles.trigger} key={group.id} value={String(i)}>
              {group.name}
            </Tabs.Trigger>
              <TrashIcon onClick={() => onDeleteGroup(group.id)} />
            </> 
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
