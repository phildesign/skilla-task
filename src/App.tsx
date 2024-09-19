import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import Container from './components/Container/Container';
import CallList from './components/CallList/CallList';
import CallListTop from './components/CallListTop/CallListTop';
import { callListDataSelector, fetchData } from './redux/slices/callListDataSlice';

import styles from './App.module.css';

const App = (): JSX.Element => {
	const { results } = useAppSelector(callListDataSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	console.log(results, 'results');

	return (
		<div className={styles.root}>
			<Container>
				<CallList>
					<CallListTop />
					{!!results &&
						results.map((item) => {
							return <div key={item.id}>{item.partner_data.name}</div>;
						})}
				</CallList>
			</Container>
		</div>
	);
};

export default App;
