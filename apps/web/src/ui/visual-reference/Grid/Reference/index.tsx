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
    <Card className={styles.card} {...props}>
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
      <div className={styles.nameAction}>
        <h3>{name}</h3>
        <Button
          variant="ghost"
          onClick={() => {
            deleteReference(Number(id));
          }}
        >
          <TrashIcon />
        </Button>
      </div>
      <p>{description}</p>
      <div className={styles.tags}>
        {tags
          ?.slice(0, 3)
          .map((tag) => (
            <Tag key={`tag-${tag}-${Math.random() * 1000}`}>{tag}</Tag>
          ))}
        {tags.length > 3 && <span>+ {tags.length - 3} tags</span>}
      </div>
    </Card>
  );
};
