import { GradeProps } from './Grade.props';

import styles from './Grade.module.scss';

const Grade = ({ errors }: GradeProps): JSX.Element => {
	return <div className={styles.root}>{errors}</div>;
};

export default Grade;
