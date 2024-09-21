import { CallProps } from './Call.props';

import styles from './Call.module.scss';

const Call = ({ phone }: CallProps): JSX.Element => {
	return <div className={styles.root}>{phone}</div>;
};

export default Call;
