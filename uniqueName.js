var listArray = [`Olivia`, `Sophia`, `Emma`,`Ava`,`Emma`,`Olivia`];
var uniqueArray = [];
var count = 0;
var found = false;

for(i = 0; i < listArray.length; i++){
    for(j = 0; j < uniqueArray.length; j++){
        if(listArray[i] == uniqueArray[j]){
            found = true;
        }
    }
    count++;
    if(count == 1 && found == false){
        uniqueArray.push(listArray[i]);
    }
    count = 0;
    found = false;
}

console.log(listArray);
console.log(uniqueArray);