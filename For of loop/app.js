let name=["Anand", "Adarsh", "Ajit", "Arun"];
for(name of name){
    console.log(name);
}

for(char of "ANANDYADAVPANIHARSENANPURJAUNPUR"){
    console.log(char);
}


//nested for of  loop
let hero=[["anand", "Adarsh", "Arun", "Ajit"], ["Tushar", "Himanshu", "Dipanshu", "Aryan"]];
for(list of hero){
    for(all of list){
        console.log(all.toUpperCase());
        console.log(all.toLowerCase());

    }
}