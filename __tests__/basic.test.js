import React from 'react';

test('toBe for testing primitives', () => {
	expect(1 + 1).toBe(2)
})

test('toEqual for testing references', () => {
	expect({name: 'julio'}).toEqual({name: 'julio'})
})