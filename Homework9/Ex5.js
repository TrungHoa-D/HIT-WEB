var arr=[0,0,0,0,0];
function MoveZero(arr) {
    let non=[];
    for(let j=0;j<arr.length;j++) {
        if(arr[j]==0) non.push(j);
    }
    for(let i=0;i<non.length;i++) 
    {
        arr.splice(non[i],1);
        arr.push(0);
        for(let j=i+1;j<non.length;j++) non[j]--;
    }
    return arr;
}
arr=MoveZero(arr);
console.log(arr);