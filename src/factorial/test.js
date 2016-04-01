import { should } from 'chai'
should()

import factorial from './solution'

describe('factorial', () => {
	it('should word with 1', () => {
		factorial(1).should.be.equal(1)
	})
	it('should word with 2', () => {
		factorial(2).should.be.equal(2)
	})
	it('should word with 3', () => {
		factorial(3).should.be.equal(6)
	})
	it('should word with 4', () => {
		factorial(4).should.be.equal(24)
	})
	it('should word with 5', () => {
		factorial(5).should.be.equal(120)
	})
})
