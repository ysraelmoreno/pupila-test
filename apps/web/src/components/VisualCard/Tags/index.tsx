import { Tag } from "@brand-zone/ui";
import { PropsWithChildren } from "react"
import styles from "./styles.module.scss";

export interface VisualCardTagsProps {
    tags: string[];
}

export const Tags = ({ tags }: PropsWithChildren<VisualCardTagsProps>) => {
    return (
        <div className={styles.tags}>
            {tags.map((tag) => (
                <Tag key={tag} className={styles.tag}>{tag}</Tag>
            ))}
        </div>
    )
}