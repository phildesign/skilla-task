import { CallListProps } from './CallList.props';

import styles from './CallList.module.css';

const CallList = ({ children }: CallListProps): JSX.Element => {
	return <div className={styles.root}>{children}</div>;
};

export default CallList;
