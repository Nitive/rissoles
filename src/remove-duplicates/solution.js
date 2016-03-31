export default function removeDuplicates(arr) {
	const newArr = [];
	for (const element of arr) {
		if (newArr.indexOf(element) === -1) {
			newArr.push(element)
		}
	}
	return newArr;
}
