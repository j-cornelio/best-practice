import React 				from 'react'
//import { shallow } from 'enzyme';
import { 
	todoReducer,
	visibilityFilter 
} 							from '../src/reducers/todoReducers'
import { 
	handleAddTodo, 
	handleToggleTodo,
	handleVisibility
} 							from '../src/actions'

const initial 				= [{completed:false, id:123, text:'dance'}];

const addFinState 			= todoReducer([], handleAddTodo('dance'), 'test');
const toggleFinState 		= todoReducer(initial, handleToggleTodo(123), 'test');
const visFinState  			= visibilityFilter( '', handleVisibility('VISIBLE') );

test('Add Todo', () => {
	expect( addFinState ).toEqual( [{completed:false, id:123, text:'dance'}] )
})

test('Toggle Todo', () => {
	expect( toggleFinState ).toEqual( [{completed:true, id:123, text:'dance'}] )
})


test('Visibility', () => {
	expect( visFinState ).toBe( 'VISIBLE' )
})

console.log( ` 
	---------------------- LOG ------------------------ 

	${visFinState}` )
