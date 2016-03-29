export const isPrime = number => {
	for (let i = 1; i < number - 1; i++) {
		if (number % (number - i) === 0) {
			return false
		}
	}
	return true
}
