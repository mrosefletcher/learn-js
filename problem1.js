//Euler Problem 1

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const sumOfMultiplesOf3And5BelowValue = (below) => {
    multiplesOf3And5 = multiplesBelowValue(below, [3, 5])
    return sum(multiplesOf3And5);
}

const multiplesBelowValue = (below, multiples) => {
    integersBelowValue = [...Array(below).keys()];

    // Get list of list: each list is multiples of given multiple (3, 5)
    var listofLists = [];
    for (var multiple of multiples){
        listofLists.push(multiplesInList(multiple, integersBelowValue));
    }

    // de-duplicate list    
    return [...new Set(listofLists.flat())];
}

const multiplesInList = (multiple, listOfIntegers) => {
        // 2. For each integer in integersBelowValue
    //  check integer % multiple === 0
    //   if it does: add to new list
    return listOfIntegers.filter((integer) => { return isMultipleOf(multiple, integer)} )
}

const isMultipleOf = (multiple, x) => x % multiple === 0

const sum = (list) =>list.reduce((a, b) =>(a + b), 0);