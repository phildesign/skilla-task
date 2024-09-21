import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { callListDataSelector, fetchData } from './redux/slices/callListDataSlice';
import Container from './components/Container/Container';
import CallList from './components/CallList/CallList';
import CallListTop from './components/CallListTop/CallListTop';
import CallListMain from './components/CallListMain/CallListMain';

import styles from './App.module.scss';

const App = (): JSX.Element => {
	const { results } = useAppSelector(callListDataSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div className={styles.root}>
			<Container>
				<CallList>
					<CallListTop />
					<CallListMain results={results} />
				</CallList>
			</Container>
		</div>
	);
};

export default App;
