import React        from 'react';
import ReduxObs     from '../components/RX/ReduxObs';
import RXComp     		from '../components/RX/RXComp';
import DoubleClick     		from '../components/RX/DoubleClick';

const ReduxObsPage = () => (
	<div>
		<ReduxObs />

		<hr />

		<RXComp />
		
		<hr />

		<DoubleClick />
	</div>
)

export default ReduxObsPage;