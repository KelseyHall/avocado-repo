import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAvNfgxKL07EuY0H8NvaN8r2aT5VuqQuiY",
    authDomain: "expensify-a354e.firebaseapp.com",
    databaseURL: "https://expensify-a354e-default-rtdb.firebaseio.com",
    projectId: "expensify-a354e",
    storageBucket: "expensify-a354e.appspot.com",
    messagingSenderId: "23102082143",
    appId: "1:23102082143:web:5c861e0d2370f4cb5ddfea",
    measurementId: "G-X1JY107F0N"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

// child_removed
database.ref('expenses').on('child_removed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val())
})
// child_changed
database.ref('expenses').on('child_changed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val())
})
//child_added
database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key, snapshot.val())
})

// database.ref('expenses')
// .on('value',(snapshot)=>{
//     const expenses = []
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//   console.log(expenses)
// })




// const expenses = {
//     expenses:{
//         gdfgsdja: {
//             description:'groceries',
//             note:'frescho',
//             amount: 8000,
//             createdAt: 325465489645435465456543

//         },
//         sdfghafa:{
//             description:'dog food',
//             note:'global pet',
//             amount:4000 ,
//             createdAt: 346578697754324564768743

//         },
//         sfgsasfvsa:{
//             description:'hair cut',
//             note:'first choice',
//             amount:2000 ,
//             createdAt:234567898765432123456789 

//         }
//     }
// }
// database.ref().set(expenses)

database.ref('expenses').push(
    {
        description:'dog food',
        note:'global pet',
        amount:4000 ,
        createdAt: 346578697754324564768743
    }
)


// database.ref('notes').push({
//     title: 'today',
//     body: 'go to sleep'
// })



// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'this is my note'
// },{
//     id: '1762arq',
//     title: 'second note!',
//     body: 'this is my note'
// }]

// database.ref('notes').set(notes)


// database.ref().on('value',(snapshot) =>{
//     const prop = snapshot.val()
//     console.log(`${prop.name} is a ${prop.job.title} at ${prop.job.company}`)
// })
// setTimeout(()=>{
//     database.ref().update({
//         name:'Takuya',
//         'job/title': "Senior Developer",
//         "job/company": "Google"
//     })
// },3500)




// const onValueChange = database.ref().on('value', (snapshot) =>{
//     console.log(snapshot.val())
// }, (e) =>{
//     console.log('Error with data fetching', e)
// })

// setTimeout(()=>{
//     database.ref('age').set(30)
// },3500)
// setTimeout(()=>{
//     database.ref().off(onValueChange)
// },7000)
// setTimeout(()=>{
//     database.ref('age').set(32)
// },10500)

// database.ref('location').once('value').then((snapshot)=>{
//     const val = snapshot.val()
//     console.log(val)
// }).catch((e)=>{
//     console.log('Error fetching data', e)
// })

// database.ref().set({
//     name: 'Kelsey Hall',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location:{
//         city:'Bowmanville',
//         country:'Canada'
//     }
     
// }).then(()=>{
//     console.log('Data is saved')
// }).catch((e)=>{
//     console.log('this failed',e)
// })

// database.ref().update({
//     stressLevel:9,
//     'job/company': 'Amazon',
//     'location/city' : 'Toronto'
   
   
// })
// database.ref('isSingle').remove().then(()=>{
//     console.log('removed succeeded')
// }).catch((e)=>{
//     console.log('removed failed',e)
// })