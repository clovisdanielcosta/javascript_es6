function getName(){
    return 'Clovis Daniel Costa';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
