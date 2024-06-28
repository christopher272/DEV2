function filterAnagrams(arr, target) {

    const sortWords = (word) => word.split('').sort().join('');

    const sortedTarget = sortWords(target);

    return arr.filter((word) => sortWords(word) === sortedTarget);

}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']


function sortByMultipleCriteria(people) {
    return people.slice().sort((a,b) => {
        if (a.age === b.age) {
            return a.name.localeCompare(b.name)
        }            
        return a.age - b.age
        })
    }

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]