const student = {
    name: "Anand",
    age: 19,
    marks: 62
};
console.log(student);
console.log(student.age);
console.log(student.name);
console.log(student.marks);

const obj={
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
console.log(obj);

//Object of Object
const classInfo={

    anand:{
        grade:"A",
        city: "Jaunpur"
    },

    harsh:{
        grade:"A",
        city: "Mathura"
    },

    gautam:{
        grade:"A",
        city: "Mathura"
    }
}

console.log(classInfo);
console.log(classInfo.anand);
console.log(classInfo.harsh);
console.log(classInfo.gautam);
console.log(classInfo.anand.grade);
console.log(classInfo.harsh.grade);
console.log(classInfo.gautam.grade);
console.log(classInfo.anand.city);
console.log(classInfo.harsh.city);
console.log(classInfo.gautam.city);

let rand=Math.ceil(Math.random()*100)+1;
console.log(rand);


