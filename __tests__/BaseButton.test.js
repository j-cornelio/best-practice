import React 				from 'react'
import { shallow } 			from 'enzyme';
import adapter 				from 'enzyme-adapter-react-15'
import BaseButton 			from '../src/components/BaseButton'

const str = 'hello';
const wrapper = shallow(<BaseButton />);


describe('BaseButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BaseButton />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});

console.log( ` 
	---------------------- LOG ------------------------ 

	${ str }` )
