export default function fibonacci(count) {
	switch (count) {
		case 1: return 1
		case 2: return 1
		default: return fibonacci(count - 1) + fibonacci(count - 2)
	}
}
