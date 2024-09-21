import { SourseProps } from './Source.props';

import styles from './Source.module.scss';

const Source = ({ source }: SourseProps): JSX.Element => {
	return <div className={styles.root}>{source}</div>;
};

export default Source;
