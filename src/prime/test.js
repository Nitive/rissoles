import { should } from 'chai'
should()

import { isPrime } from './solution'

describe('prime', () => {
	it('1 is prime', () => {
		isPrime(1).should.be.true
	})
	it('2 is prime', () => {
		isPrime(2).should.be.true
	})
	it('3 is prime', () => {
		isPrime(3).should.be.true
	})
	it('4 is not prime', () => {
		isPrime(4).should.be.false
	})
	it('5 is prime', () => {
		isPrime(5).should.be.true
	})
	it('137 is prime', () => {
		isPrime(137).should.be.true
	})
	it('237 is not prime', () => {
		isPrime(237).should.be.false
	})
})
