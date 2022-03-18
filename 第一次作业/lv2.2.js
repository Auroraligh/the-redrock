function throttle(fun,wait){
    //let context,args;
    let old=0;
    return function(){
        let now=new Date().valueOf();
        if(now-old>wait){
            fun();
            old=now;

        }
    }
}
function doSomething(){
        console.log(input.value)
    }
    let input=document.querySelector('input');
    
    input.oninput=throttle(doSomething,1000);