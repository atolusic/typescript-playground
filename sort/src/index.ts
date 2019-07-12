import {Sorter} from './Sorter'
import {NumbersCollection} from './NumbersCollection'
import {CharactersCollection} from './CharactersCollection'
import {LinkedList} from './LinkedList'

// const numbersCollection = new NumbersCollection([1, 6, -1, 0, 10, 9, 50])
// numbersCollection.sort()
// console.log(numbersCollection.data)

// const charactersCollection = new CharactersCollection('gdbaty')
// charactersCollection.sort()
// console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

linkedList.sort()
linkedList.print()