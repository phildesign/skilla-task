import { CallListMainProps } from './CallListMain.props';
import Type from '../Type/Type';
import Time from '../Time/Time';
import Employee from '../../Employee/Employee';

import styles from './CallListMain.module.scss';
import Call from '../Call/Call';

const CallListMain = ({ results }: CallListMainProps): JSX.Element => {
	return (
		<div className={styles.root}>
			{!!results &&
				results.map((item) => {
					return (
						<div className={styles.row} key={item.id}>
							<div className={styles.col}>
								<Type in_out={item.in_out} />
							</div>

							<div className={styles.col}>
								<Time date={item.date} />
							</div>

							<div className={styles.col}>
								<Employee
									person_avatar={item.person_avatar}
									person_name={item.person_name}
									person_surname={item.person_surname}
								/>
							</div>

							<div className={styles.col}>
								<Call phone={item.partner_data.phone} />
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default CallListMain;
