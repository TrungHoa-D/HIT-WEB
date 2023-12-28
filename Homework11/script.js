Array.prototype.myReduce =function ( callback, initialValue){
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for(let i= startIndex;i<this.length;i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}
const arr = [1, 2, 5, 3, 4];
const sum = arr.myReduce((e,a) => e+a);
console.log(sum);
Array.prototype.myFind = function(callback, thisValue) {
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisValue, this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
};
const find =arr.myFind((e) => e>2);
console.log(find);
Array.prototype.mySort = function(compare) {
    if(compare === undefined) compare= function(a,b) {
        return String(a) > String(b) ? 1 : -1;
    }
    for(let i=0;i<this.length-1;i++)
        for(let j=i+1;j<this.length;j++)
            if(compare(this[i],this[j])>0) {
                const t=this[i];
                this[i]=this[j];
                this[j]=t;
            }
    return this;
}
const sort= arr.mySort();
console.log(sort);