import React 				from 'react'
import { todoReducer } 		from '../src/reducers/todoReducers'
import { 
	handleAddTodo, 
	handleToggleTodo
} 							from '../src/actions'

const initial = [{completed:false, id:123, text:'dance'}];

const addFinState = todoReducer([], handleAddTodo('dance'), 'test');
const toggleFinState = todoReducer(initial, handleToggleTodo(123), 'test');

test('Add Todo', () => {
	expect( addFinState ).toEqual( [{completed:false, id:123, text:'dance'}] )
})

test('Toggle Todo', () => {
	expect( toggleFinState ).toEqual( [{completed:true, id:123, text:'dance'}] )
})



console.log( ` ---------------------- LOG ------------------------ 
	${initial}` )
