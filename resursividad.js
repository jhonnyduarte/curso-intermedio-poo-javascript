const numeritos = [55,1,2,3,4,5,5,5,8,999,1034,7,6];
let numerito = 0;

for (let index = 0; index < numeritos.length; index++){

    numerito = numeritos[index];
    console.log({index,numerito});
}

const numeritos2 = [55,10,20,3,4,8,999,1034,7,6]

function recursiva(numbersArray){

    if (numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);

        numbersArray.shift();
        recursiva(numbersArray);
    }
}

recursiva(numeritos2);