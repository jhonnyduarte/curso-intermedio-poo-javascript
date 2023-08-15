const Jhon = {
    name : 'Jhon',
    age : 46,
    approvedCourses: ['Curso 1'],
    addCourse(newCourse){
        console.log('This',this);
        console.log('This.approvedCourses',this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
}

/* console.log(Object.keys(Jhon));
console.log(Object.getOwnPropertyNames(Jhon));
console.log(Object.entries(Jhon)); */



/* Object.defineProperty(Jhon, 'navigator', {
    value: 'Chrome',
    enumerable: false,
    writable: true,
    configurable: true,
});
Object.defineProperty(Jhon, 'editor', {
    value: 'VSCode',
    enumerable: true,
    writable: false,
    configurable: true,
});
Object.defineProperty(Jhon, 'terminal', {
    value: 'WSL',
    enumerable: true,
    writable: true,
    configurable: false,
});
Object.defineProperty(Jhon, 'pruebaNasa', {
    value: 'alien',
    enumerable: false,
    writable: false,
    configurable: false,
}); */

Object.seal(Jhon);//configurable : false
Object.freeze(Jhon);// configurable:false writable:false

console.log(Object.getOwnPropertyDescriptors(Jhon));