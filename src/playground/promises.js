const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('this is my resolved data')
        // reject('Error, something went wrong')
    },1500)
    

})
console.log('before')
promise.then((data)=>{
    console.log(data)
    return 'some data'
}).then((str)=>{
    console.log('does this run?',str)
}).catch((err)=>{
    console.log('error:',err)
})
console.log('after')