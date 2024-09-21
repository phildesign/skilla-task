import { parse, format } from 'date-fns';
import { TimeProps } from './Time.props';

import styles from './Time.module.scss';

const Time = ({ date }: TimeProps): JSX.Element => {
	const dateFull = parse(date.toString(), 'yyyy-MM-dd HH:mm:ss', new Date());
	const formattedTime = format(dateFull, 'HH:mm');

	return <div className={styles.root}>{formattedTime}</div>;
};

export default Time;
