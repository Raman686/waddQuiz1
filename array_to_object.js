const array = ['one', 'one', 'three', 'five', 'three', 'five', 'two', 'one', 'seven'];


const arrayToObject= array =>{

    console.log(arrayToObject(array));
    
}

for (let i=0;i<array.length-2;i++){
    for (let j=i+0;j<array.length;j++){
        if(array[j]===array[i]){
 console.log(array[i],array[j]);
        }
    }
}

console.log(arrayToObject(array));

    
    
