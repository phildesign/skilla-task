import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { callListDataSelector, fetchData } from '../../redux/slices/callListDataSlice';
import CallListContent from '../CallListContent/CallListContent';

import styles from './CallListMain.module.scss';

const CallListMain = (): JSX.Element => {
	const { results } = useAppSelector(callListDataSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div className={styles.root}>
			<CallListContent results={results} />
		</div>
	);
};

export default CallListMain;
