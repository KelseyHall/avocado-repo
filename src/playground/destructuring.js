//  object destructoring

// const person = {
//     name: 'Kelsey',
//     age: 28,
//     location: {
//         city:'Bowmanville',
//         temp:9
//     }
// }
// const {name = 'annoymous', age} = person
// console.log(`${name} is ${age}.`)


// const {temp: temperature, city} = person.location
// if(temperature && city){
//     console.log(`it's ${temperature} in ${city}`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name : 'Penguin'
//     }
// }
// const { name: publisherName = 'self-published' } = book.publisher

// console.log(publisherName)

// Array Destructuring
// const address = ['1299 3 Juniper Street','Phily','Pens','19147']

// const [, city, state = 'New york' ]= address
//  console.log(`you are in ${state} ${city}.`)

 const item = ['coffee (hot)', '$2.00','$2.50','$2.75']
 const[menuItem, , med] = item
 console.log(`A medium ${menuItem} cost ${med}`)