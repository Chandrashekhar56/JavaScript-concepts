
const aa={firstname:"chandrashekhar",lastname:"sati",age:"24",add:"ranipokhari",};
const zz={firstname:aa.firstname,lastname:aa.lastname,age:aa.age,add:aa.add};

const{firstname,lastname,age,add}=aa;

zz.firstname="shekhar";
console.log(zz);
console.log(aa);
