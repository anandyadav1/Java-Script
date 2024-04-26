let student=[["Anand",95], ["Adarsh",95],["Arun",96],["Ajit",98]];
for(let i=0; i<student.length; i++){
    console.log('Information of student #${i}'); 
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}