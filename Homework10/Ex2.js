const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];
  dogs.forEach(
    function(x) {
        x.recFood = x.weight ** 0.75 * 28;
    }
  )
  console.log(dogs);
  let sarahDog= dogs.findIndex(
    function(x){
        return x.owners.some(
            function(x){
                return x=="Sarah";
            }
        )
    }
  )
  let low = dogs[sarahDog].recFood*90/100;
  let high = dogs[sarahDog].recFood*110/100;
  if(dogs[sarahDog].curFood >= low && dogs[sarahDog].curFood <= high){
    console.log("Sarah's dog ate enough");
  }
  else if(dogs[sarahDog].curFood < low) {
    console.log("Sarah's dog ate not enough");
  }
  else if(dogs[sarahDog].curFood > high) {
    console.log("Sarah's dog ate too much");
  }
  let ownersEatTooMuch = dogs.filter(
    function(x) {
        let hi=x.recFood*110/100;
        return x.curFood>hi;
    }
  ).map(
    function(y){
        return y.owners;
    }
  ).flat(Infinity);
  let mes="";
  ownersEatTooMuch.forEach(
    function(x,i)
    {
        if(i!=0) mes+=" and "+x;
        else mes+=x;
    }
  )
  mes+="'s dogs eat too much!";
  console.log(mes);
  let ownersEatTooLittle = dogs.filter(
    function(x) {
        let lo=x.recFood*90/100;
        return x.curFood<lo;
    }
  ).map(
    function(y){
        return y.owners;
    }
  ).flat(Infinity);
  let mess="";
  ownersEatTooLittle.forEach(
    function(x,i)
    {
        if(i!=0) mess+=" and "+x;
        else mess+=x;
    }
  )
  mess+="'s dogs eat too little!";
  console.log(mess);
  console.log(dogs.some(
    function(x) {
        return x.curFood==x.recFood;
    }
  ));
  console.log(dogs.some(
    function(x) {
        return x.curFood>=x.recFood;
    }
  ));
  let dogAteEnough= dogs.filter(
    function(x) {
        return x.curFood>=x.recFood;
    }
  )
  console.log(dogAteEnough);
  let dogsSortedByRecFood = dogs.sort(
    function(x,y) {
        return(x.recFood-y.recFood);
    }
  )
  console.log(dogsSortedByRecFood);