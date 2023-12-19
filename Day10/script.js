const arr=[1,2,3,4,5];
console.log(arr.findIndex(
    function(x,i){
        return x==3;
    }
));