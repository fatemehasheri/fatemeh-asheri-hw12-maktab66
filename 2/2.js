function timeoutPromiseResolve(interval) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("successful");
        }, interval);
    });
};

function timeoutPromiseReject(interval) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            reject("error");
        }, interval); 
    });
};

function timeTest() { 
    timeoutPromiseResolve(5000);
    timeoutPromiseReject(2000);
    timeoutPromiseResolve(3000);
}

let startTime = Date.now();
timeTest().then(() => {}).catch(e => {
    console.log(e);
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime;
    alert("Time taken in milliseconds: " + timeTaken);
})    
//استreject() و resolve()هست وخروجی نابع  thenدارای متدی به نام promise استفاده میکنیم وpromiseبرای هندل کردن این موضوع و داشتن خروجی از Async چون فانکشن های بالا یک فانکشن 
//استفاده شده استthen در خط 24 از متد  regular functionکه یک  timeTestارور این کد به این دلیل است که روی تابع 
//  روی ان اثر کندcatchوهمچنین متد thenاستفاده کرد که متد promise از timeTestبرای حل این مشکل باید در تابع 



