// one example:
const addition = (a, b) => a + b
let res = addition(3 ,4 )
console.log('res===', res)

// assume when the calculation is very slow
const additionSlow = (a, b) => {
    setTimeout(()=>{
        let res = a + b;
        return res;
    }, 2000)
}

let res2 =  additionSlow(2, 5)

console.log('res2', res2)

// asynchronous function ---> deal with the example above
const addtionAsync = async (a, b) => a+b
let res3 = addtionAsync(5, 9)
// console.log('res3===>', res3) //return promise, like a receipt

res3.then(resbb => console.log('resbb',resbb)) //.then( callback func )

// synchronous (sync) vs async
// sync
// |----A-----|
//            |----B-----|

// async
// |----A-----|
//     |-------B------|

// How do we deal with async function?
// Promise (receipt)
// A promise has the following states:
// pending: initial state
// fulfilled: the operation is completed successfully ---- .then
// rejected: operation failed
// settled: whole process finished

// 2. try/catch + async/await // todo: will talk/learn it in backend

