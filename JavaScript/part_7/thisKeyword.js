const student = {
    name:"Devika",
    age:23,
    eng:95,
    math: 93,
    phy: 97,
    grtAvg(){
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
    }
}
console.log(student.grtAvg());