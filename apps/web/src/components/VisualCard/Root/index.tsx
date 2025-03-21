import { Card } from "@brand-zone/ui"
import { PropsWithChildren } from "react"
import styles from "./styles.module.scss";

export const Root = ({ children }: PropsWithChildren) => {
    return (
        <Card className={styles.card}>
            {children}
        </Card>     
    )
}