const jhon = {
    name: 'Jhon',
    age: 46,
    approvedCourses: ['Curso 1'],
    addCourse (newCourse){
        console.log('This',this);
        console.log('This.approvedCourses',this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
}

//console.log(Object.keys(jhon)); 
//console.log(Object.getOwnPropertyNames(jhon)); 
//console.log(Object.entries(jhon)); 



Object.defineProperty(jhon, 'pruebaNasa',{
    value: 'extraterrestre',
    enumerable: false,
    writable: false,
    configurable: false

})
Object.defineProperty(jhon, 'navigator',{
    value: 'chorme',
    enumerable: false,//no se ve,solo con PropertyNames,se puede modificar
    writable: true,
    configurable: true

})
Object.defineProperty(jhon, 'editor',{
    value: 'VScode',
    enumerable: true,
    writable: false,//No permite editar pero si eliminarla
    configurable: true

})
Object.defineProperty(jhon, 'terminal',{
    value: 'WSL',
    enumerable: true,
    writable: true,
    configurable: false// no permite Eliminar la propiedad

})
console.log(Object.getOwnPropertyDescriptors(jhon));

// Para mejorar el encapsulamiento
const jhon2 = {
    name: 'JhonJairo',
    age: 36,
    approvedCourses: ['Curso 1'],
    addCourse (newCourse){
        console.log('This',this);
        console.log('This.approvedCourses',this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
}

Object.seal(jhon2);//Todas las propiedades tienen configurable como false


console.log(Object.getOwnPropertyDescriptors(jhon2));

const jhon3 = {
    name: 'Jairo',
    age: 26,
    approvedCourses: ['Curso 1'],
    addCourse (newCourse){
        console.log('This',this);
        console.log('This.approvedCourses',this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
}

Object.freeze(jhon3);// Imposibles de eliminar y sobreescribir las propiedades

console.log(Object.getOwnPropertyDescriptors(jhon3));