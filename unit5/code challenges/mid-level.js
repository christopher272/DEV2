function extractUniqueCharacters(strings) {
    const combinedString = strings.join('');
    const uniqueCharsSet = new Set(combinedString);
    const uniqueChars = Array.from(uniqueCharsSet);
    return uniqueChars;
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']



function sortByProperty(objects, propertyName) {
    return objects.sort((a, b) => {
        if (a[propertyName] < b[propertyName]) {
            return -1;
        } else if (a[propertyName] > b[propertyName]) {
            return 1;
        } else {
            return 0;
        }
    });
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);