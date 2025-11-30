import styles from './styles.module.css';
import * as React from "react";

type DefaultInputProps = {
    id: string;
    labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({id, labelText, type, ...props }: DefaultInputProps) {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input className={styles.input} id={id} type={type} {...props} />
        </>
    )
}