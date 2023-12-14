var n =window.prompt("Nhap n: ");
console.log(n);
var arr= [];
function Pascal(x,i,be) {
    if(i>x) return;
    var no=[];
    if(i==1) {
        no.push(1);
    }
    else if(i==2) {
        no.push(1);
        no.push(1);
    }
    else {
        for(let i=0;i<be.length-1;i++)
        no.push(be[i]+be[i+1]);
        no.push(1);
        no.unshift(1);
    }
    arr.push(no);
    //console.log(i+' - '+be+' - '+arr);
    Pascal(x,i+1,no);
}
Pascal(n,1,[]);
console.log(arr);