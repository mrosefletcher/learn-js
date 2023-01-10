// this is where the code would go, if I had any

// oh hai!

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function add(x,y) {
    return x + y
}

const add = (x, y) => {
    return x + y
}

const sumOfMultiplesOf3And5BelowValue = (below) => {
    multipleOf3And5 = multipleBelowValue(below, [3, 5])
    return sum(multipleOf3And5)
}

const multiplesBelowValue = (below, multiples) => {
    integersBelowValue = [...Array(5).keys()];

    
    // Get list of list: each list is multiples of given multiple (3, 5)

    // 1. For each multiple in multiples



    // flatten list
    // de-duplicate list

}

const flatten = (listOfLists) => {}

const multiplesInList = (multiple, listOfIntegers) => {
        // 2. For each integer in integersBelowValue
    //  check integer % multiple === 0
    //   if it does: add to new list
    listOfIntegers.filter((integer) => { return isMultipleOf(multiple, integer)} )
}


const sum = (list) => {}


const isMultiple = (x) => { 
    return isMultipleOf(multiple, x)
} 

const isMultipleOf = (multiple, x) => x % multiple === 0




/*


def _is_multiple_of(multiple, x):
    return x % multiple == 0

def _multiples_in_list(multiple, list_of_integers):
    return list(filter(partial(_is_multiple_of, multiple), list_of_integers))


def _flatten(list_of_lists):
    return list(itertools.chain(*list_of_lists))


def multiples_below_value(below, multiples):
    integers_below_value = list(range(0, below))

    return set(_flatten([
        _multiples_in_list(multiple, integers_below_value)
        for multiple in multiples
    ]))


def sum_of_multiples_of_3_and_5_below_value(below):
    multiples_of_3_and_5 = multiples_below_value(below, multiples=[3, 5])
    return sum(multiples_of_3_and_5)

    */