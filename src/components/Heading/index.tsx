import styles from "./styles.module.css";

type ContainerProps = {
  children?: React.ReactNode;
};

export function Heading({ children }: ContainerProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
