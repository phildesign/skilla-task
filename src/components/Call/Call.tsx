import { parsePhoneNumber, PhoneNumber } from 'libphonenumber-js';
import { CallProps } from './Call.props';

import styles from './Call.module.scss';

const Call = ({ phone }: CallProps): JSX.Element => {
	const parsedNumber: PhoneNumber = parsePhoneNumber(phone, 'RU');
	const formattedNumber = `+7${parsedNumber.formatNational().slice(1)}`;

	return <div className={styles.root}>{formattedNumber}</div>;
};

export default Call;
