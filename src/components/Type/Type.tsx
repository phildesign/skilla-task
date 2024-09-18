import styles from './Type.module.css';

const Type = (): JSX.Element => {
	return (
		<div className={styles.root}>
			<svg
				width="13"
				height="13"
				viewBox="0 0 13 13"
				fill="none"
				className={styles.icon}
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12.5217 1.17704L11.3447 0L1.66957 9.67513V4.17391H0V12.5217H8.34783V10.8522H2.84661L12.5217 1.17704Z"
					fill="#005FF8"
				/>
			</svg>
		</div>
	);
};

export default Type;
