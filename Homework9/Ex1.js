const obj1 = {
    fullName: "Linh",
    height: 160,
    weight: 40,
    calcBMI: function() {
        return this.weight/(this.height ** 2);
    },
};
const obj2 = {
    fullName: "Huy",
    height: 175,
    weight: 65,
    calcBMI: function() {
        return this.weight/(this.height ** 2);
    },
};
if(obj1.calcBMI() > obj2.calcBMI()) {
    console.log("Người có chỉ số BMI cao hơn là: "+obj1.fullName);
}
else {
    console.log("Người có chỉ số BMI cao hơn là: "+obj2.fullName);
}