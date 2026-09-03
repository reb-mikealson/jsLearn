function f1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("hiiiiiii");
    },4000);
    })
}

function f2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("ABES COLLEGE");
    },2000);
    })
}