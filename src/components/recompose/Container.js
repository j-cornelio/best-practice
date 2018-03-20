import Prentational      from './medium';
import { compose, withState, withHandlers, withProps }      	from 'recompose';

export default compose(
	withState('isVisible', 'toggleVis', false),
	withHandlers({
		toggleVisibility: ({ toggleVis, isVisible }) => {
			return (event) => {
				return toggleVis(!isVisible)
			}
		}
	}),
	withProps(({ isVisible }) => {
		return {
			title	: isVisible ? 'This is the visible title' : 'This is the default title',
			message : isVisible ? 'Hello I am visible' : 'I am not visible, click the muthafukken button nigga',
		}
	})
)(Prentational)
