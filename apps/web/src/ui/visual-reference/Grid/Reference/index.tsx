import { Button, Card, Tag } from "@brand-zone/ui";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import {
  Group,
  VisualReference,
} from "../../../../interface/visualReference.interface";
import styles from "./styles.module.scss";
import { useVisualReferences } from "../../../../context/visualReference.context";
import AddModal from "../../AddModal";
import { ToolsProvider } from "../../../../context/tools.context";
import * as VisualCard from "../../../../components/VisualCard";

export interface ReferenceProps extends VisualReference {
  onDelete?: (id: string) => void;
  groups?: Group[];
}

export const Reference = ({
  description,
  name,
  tags,
  url,
  id,
  group,
  groups = [],
  ...props
}: ReferenceProps) => {
  const { deleteReference, updateReference } = useVisualReferences();

  return (
    <VisualCard.Root {...props}>
      <VisualCard.Head>
      <div className={styles.imageContainer}>
        <img src={url} />
        <div className={styles.editContainer}>
          <ToolsProvider defaultUrl={url}>
            <AddModal
              trigger={<Pencil1Icon />}
              defaultDescription={description}
              defaultName={name}
              defaultTags={tags}
              defaultUrl={url}
              defaultGroup={group}
              defaultId={id}
              groups={groups}
              onActionClick={(reference: VisualReference) =>
                updateReference(reference.id, reference)
              }
            />
          </ToolsProvider>
        </div>
      </div>
      </VisualCard.Head>
      <VisualCard.Content name={name} onDelete={() => deleteReference(Number(id))} />
      <VisualCard.Subtitle>{description}</VisualCard.Subtitle>
      <div className={styles.tags}>
        <VisualCard.Tags tags={tags?.slice(0, 3)} />
        {tags.length > 3 && <span>+ {tags.length - 3} tags</span>}
      </div>
    </VisualCard.Root>
  );
};
