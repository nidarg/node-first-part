

const delayFn = (timer)=>{
    return new Promise((resolve)=>setTimeout(resolve, timer))
}

console.log("Promise start");
delayFn(2000).then(()=>console.log('after 2 seconds promise resolved'))
console.log('end');


