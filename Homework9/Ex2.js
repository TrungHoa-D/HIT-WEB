var bigNum = "240103649028164869";
function add1(x) {
    x = String(x);
    for (let i = x.length - 1; i >= 0; i--) {
        let a = Number(x.charCodeAt(i) - 48);
        if (a == 9) {
            x = x.substring(0, i) + "0" + x.substring(i + 1);
            if(i==0) x = 1+x;
        } else {
            x = x.substring(0, i) + String.fromCharCode(48 + a + 1) + x.substring(i + 1);
            break;
        }
    }
    return x;
}
function cs(x) {
    x=add1(x);
    var arr=[];
    for(let i=0;i<x.length;i++) {
        arr.push(x.charCodeAt(i)-48);
    }
    return arr;
}
console.log(cs(bigNum));