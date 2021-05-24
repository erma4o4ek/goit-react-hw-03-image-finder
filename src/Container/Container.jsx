import styles from '../Container/Container.module.css';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;