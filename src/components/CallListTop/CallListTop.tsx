import styles from './CallListTop.module.css';

const callListTopData: string[] = [
	'Тип',
	'Время',
	'Сотрудник',
	'Звонок',
	'Источник',
	'Оценка',
	'Длительность',
];

const CallListTop = (): JSX.Element => {
	return (
		<div className={styles.root}>
			<div className={styles.row}>
				{callListTopData.map((item) => {
					return (
						<div className={styles.col}>
							<div className={styles.title}>{item}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CallListTop;
