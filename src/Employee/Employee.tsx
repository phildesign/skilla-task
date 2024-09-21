import { EmployeeProps } from './Employee.props';

import styles from './Employee.module.scss';

const Employee = ({ person_avatar, person_name, person_surname }: EmployeeProps): JSX.Element => {
	return (
		<div className={styles.root}>
			<img src={person_avatar} alt={`${person_name} ${person_surname}`} />
		</div>
	);
};

export default Employee;
