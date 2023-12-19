let cat=[2,1,5,7,10];
let human= cat.map(
    function(x) {
        if(x<=2) return x*2;
        else return x*4+16;
    }
);
let adults= human.filter(
    function(x) {
        return x>=18;
    }
);
let avgAdults= adults.reduce(
    function(x,y) {
        return x+y;
    }   
)/adults.length;
console.log("Cat: "+cat);
console.log("Human: "+human);
console.log("Adults: "+adults);
console.log("Average age of adults: "+avgAdults);