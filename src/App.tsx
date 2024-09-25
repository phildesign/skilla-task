import Container from './components/Container/Container';
import CallList from './components/CallList/CallList';
import CallListTop from './components/CallListTop/CallListTop';
import CallListMain from './components/CallListMain/CallListMain';

import styles from './App.module.scss';

const App = (): JSX.Element => {
	return (
		<div className={styles.root}>
			<Container>
				<CallList>
					<CallListTop />
					<CallListMain />
				</CallList>
			</Container>
		</div>
	);
};

export default App;
