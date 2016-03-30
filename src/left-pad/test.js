import { should } from 'chai'
should()

import leftPad from './solution'

describe('left-pad', () => {
	it('should add spaces', () => {
		leftPad('22', 4).should.be.equal('22  ')
	})
	it('should add zeros', () => {
		leftPad('22', 4, 0).should.be.equal('2200')
	})
	it('should add to numbers', () => {
		leftPad(22, 4, 1).should.be.equal('2211')
	})
	it('should add nothing if text.length is equal length', () => {
		leftPad(22, 2).should.be.equal('22')
	})
	it('should add nothing if text.length is less than length', () => {
		leftPad(333, 2).should.be.equal('333')
	})
})
