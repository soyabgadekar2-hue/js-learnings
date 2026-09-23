console.log("For Loop");
for ( let i=1; i<=5; i++){
    if (i==3){
        break;
    }
    console.log("Soyab");
}

for ( let i=1; i<=5; i++){
    if (i==3){
        continue;
    }
    console.log(i);
}

for (let i=5; i>=1; i--){
    console.log(i);
}

console.log("While Loop");
let i=1;
while(i<6){
    if (i==4){
        break;
    }
    console.log("JS");
    i++;
}

while(i<6){
    if (i==3){
        continue;
    }
    console.log(i);
    i++;
}

while(i>0){
    console.log(i);
    i--;
}
