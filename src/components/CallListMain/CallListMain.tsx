import { CallListMainProps } from './CallListMain.props';
import Type from '../Type/Type';

import styles from './CallListMain.module.scss';

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

							<div className={styles.col}></div>
						</div>
					);
				})}
		</div>
	);
};

export default CallListMain;
