import { DurationProps } from './Duration.props';

import styles from './Duration.module.scss';

const Duration = ({ time }: DurationProps): JSX.Element => {
	const formattedTime = `${Math.floor(time / 60)}:${time % 60}`;

	return <div className={styles.root}>{formattedTime}</div>;
};

export default Duration;
