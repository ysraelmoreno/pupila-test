import { PropsWithChildren } from "react"
import styles from "./styles.module.scss";

export const Head = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.cardHeader}>
            {children}
        </div>
    )
}