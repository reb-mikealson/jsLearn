function test1(cb){
    setTimeout(() =>{
        console.log("task 1");
        cb();
    },4000)
}

function test2(cb){
    setTimeout(() =>{
        console.log("task 2");
        cb();
    },3000)
}
function test3(cb){
    setTimeout(() => {
        console.log("task 3");
        cb();
    },200)
}

test1(() =>{
    test2(() => {
        test3();
    })
})