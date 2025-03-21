import { Card } from "@brand-zone/ui"
import { AllHTMLAttributes, PropsWithChildren } from "react"
import styles from "./styles.module.scss";

export interface RootProps extends AllHTMLAttributes<HTMLDivElement> {}

export const Root = ({ children, ...props }: PropsWithChildren<RootProps>) => {
    return (
        <Card className={styles.card} {...props}>
            {children}
        </Card>     
    )
}