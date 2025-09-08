const p = new Promise((resolve,reject) => {
    let x = 1 + 1;

    if (x === 2){
        resolve("success");

    }else {
         reject("fail");
    }
        
    });
    //  p = "success" 
     
    //  p = "fail"

    console.log(p)

    p.then((message) => console.log(message))

   // ====================================================

   const p = new Promise((resolve,reject) => {
    let x = 1 + 1;

    if (x === 2){
        resolve("success");

    }else {
         reject("fail");
    }
        
    });
    //  p = "success" 
     
    //  p = "fail"

    console.log(p)

    p.then((message) => console.log(message))
    //.catch((message) =>console.log(message))

    //=====================================

    //methods related to promises
    //1 : promise.all
    //2 : promise.any
    //3 : promise.race
    //4 : promise.allSettled