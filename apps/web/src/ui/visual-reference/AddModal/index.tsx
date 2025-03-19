"use client";
import { Button, Card, Input, Modal, Tag, TextArea } from "@brand-zone/ui";
import { PlusIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.scss";
import { useMemo, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useTools } from "../../../context/tools.context";
import { ModalImage } from "./Image";
import {
  Group,
  VisualReference,
} from "../../../interface/visualReference.interface";

export interface AddModalProps {
  trigger: React.ReactNode;
  onActionClick: (reference: VisualReference) => void;
  defaultName?: string;
  defaultDescription?: string;
  defaultTags?: string[];
  defaultUrl?: string;
  defaultId?: number;
  onTriggerClick?: () => void;
  groups?: Group[];
}

export const AddModal = ({
  defaultDescription = "",
  defaultName = "",
  defaultTags = [],
  defaultUrl = "",
  defaultId = Math.random() * 100,
  trigger,
  groups = [],
  onActionClick,
  onTriggerClick,
}: AddModalProps) => {
  const [name, setName] = useState(defaultName);
  const [description, setDescription] = useState(defaultDescription);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>(defaultTags);
  const [isOpen, setIsOpen] = useState(false);

  const tagInputRef = useRef<HTMLInputElement>(null);

  const { url, setUrl, isUrlValid } = useTools();

  const debounced = useDebouncedCallback((value: string) => {
    setUrl(value);
  }, 500);

  const visualReference = useMemo(() => {
    return {
      id: defaultId,
      name,
      description,
      tags,
      url,
    };
  }, [name, description, tags, url, defaultId]);

  return (
    <Modal
      isOpen={isOpen}
      onTriggerClick={() => {
        if (onTriggerClick) {
          onTriggerClick();
        }

        setIsOpen(true);
      }}
      onClose={() => setIsOpen(false)}
      trigger={trigger}
    >
      <Card className={styles.card}>
        <Input
          defaultValue={defaultUrl !== "" ? defaultUrl : url}
          onChange={(event) => debounced(event.target.value)}
        />
        <ModalImage url={url} isImageValid={isUrlValid} />
        <div className={styles.nameAndGroup}>
          <Input
            placeholder="Insert a name"
            defaultValue={defaultName}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <TextArea
          placeholder="Add a description"
          defaultValue={defaultDescription}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <Input
          placeholder="Add tags"
          ref={tagInputRef}
          onChange={(event) => {
            setTag(event.target.value);
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              if (!tag) return;

              setTags([...tags, tag]);

              if (tagInputRef.current) {
                setTag("");
                tagInputRef.current.value = "";
              }
            }
          }}
        />

        <div className={styles.tagsContainer}>
          {tags.map((singleTag) => (
            <Tag className={styles.tag} key={singleTag}>
              {singleTag}
              <Button
                className={styles.removeTagButton}
                variant="ghost"
                onClick={() => {
                  setTags(tags.filter((tag) => tag !== singleTag));
                }}
              >
                X
              </Button>
            </Tag>
          ))}
        </div>
        <div className={styles.buttonContainers}>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            disabled={!isUrlValid}
            onClick={() => {
              onActionClick(visualReference);
              setTags([]);
              setIsOpen(false);
            }}
          >
            Add Image
          </Button>
        </div>
      </Card>
    </Modal>
  );
};
