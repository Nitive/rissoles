import { should } from 'chai'
should()

import fibonacci from './solution'

describe('fibonacci', () => {
	it('1 -> 1', () => {
		fibonacci(1).should.be.equal(1)
	})
	it('2 -> 1', () => {
		fibonacci(2).should.be.equal(1)
	})
	it('3 -> 2', () => {
		fibonacci(3).should.be.equal(2)
	})
	it('4 -> 3', () => {
		fibonacci(4).should.be.equal(3)
	})
	it('5 -> 5', () => {
		fibonacci(5).should.be.equal(5)
	})
	it('6 -> 8', () => {
		fibonacci(6).should.be.equal(8)
	})
})
