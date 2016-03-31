import { should } from 'chai'
should()

import removeDuplicates from './solution'

describe('remove-duplicates', () => {
	it('should do nothing if no duplicates', () => {
		removeDuplicates([1, 2, 3]).should.be.deep.equal([1, 2, 3])
	})
	it('should do nothing if array is empty', () => {
		removeDuplicates([]).should.be.deep.equal([])
	})
	it('should remove duplicates', () => {
		removeDuplicates([1, 1]).should.be.deep.equal([1])
	})
	it('should remove few pairs', () => {
		removeDuplicates([1, 1, 2, 2]).should.be.deep.equal([1, 2])
	})
	it('should remove more then two duplicates', () => {
		removeDuplicates([1, 1, 1, 2]).should.be.deep.equal([1, 2])
	})
	it('should remove strings', () => {
		removeDuplicates([1, '1', '1', 2]).should.be.deep.equal([1, '1', 2])
	})
	it('should keep order', () => {
		removeDuplicates([1, 2, 1]).should.be.deep.equal([1, 2])
	})
})
