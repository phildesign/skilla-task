import Container from './components/Container/Container';
import CallList from './components/CallList/CallList';
import CallListTop from './components/CallListTop/CallListTop';

import styles from './App.module.css';

const App = (): JSX.Element => {
	return (
		<div className={styles.root}>
			<Container>
				<CallList>
					<CallListTop />
				</CallList>
			</Container>
		</div>
	);
};

export default App;
