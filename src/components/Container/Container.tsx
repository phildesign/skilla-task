import { ContainerProps } from './Container.props';

import styles from './Container.module.css';

const Container = ({ children }: ContainerProps): JSX.Element => {
	return <div className={styles.root}>{children}</div>;
};

export default Container;
