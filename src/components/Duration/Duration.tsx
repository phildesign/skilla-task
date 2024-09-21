import { DurationProps } from './Duration.props';

import styles from './Duration.module.scss';

const Duration = ({ time }: DurationProps): JSX.Element => {
	return <div className={styles.root}>{time}</div>;
};

export default Duration;
