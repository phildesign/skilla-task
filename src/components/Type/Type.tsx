import clsx from 'clsx';
import { TypeProps } from './Type.props';

import styles from './Type.module.scss';

const Type = ({ in_out }: TypeProps): JSX.Element => {
	return (
		<div
			className={clsx(styles.root, {
				[styles.in]: in_out === 1,
				[styles.inError]: false,
				[styles.out]: in_out === 0,
				[styles.outError]: false,
			})}>
			{in_out === 1 ? (
				<svg
					width="13"
					height="13"
					viewBox="0 0 13 13"
					fill="none"
					className={styles.icon}
					xmlns="http://www.w3.org/2000/svg">
					<path d="M12.5217 1.17704L11.3447 0L1.66957 9.67513V4.17391H0V12.5217H8.34783V10.8522H2.84661L12.5217 1.17704Z" />
				</svg>
			) : (
				<svg
					width="13"
					height="13"
					viewBox="0 0 13 13"
					fill="none"
					className={styles.icon}
					xmlns="http://www.w3.org/2000/svg">
					<path d="M-1.04904e-05 11.3447L1.17703 12.5217L10.8522 2.8466L10.8522 8.34782H12.5217L12.5217 -1.04904e-05L4.1739 -1.04904e-05V1.66955L9.67512 1.66955L-1.04904e-05 11.3447Z" />
				</svg>
			)}
		</div>
	);
};

export default Type;
