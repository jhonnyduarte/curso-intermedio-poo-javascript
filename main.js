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

console.log(Object.getOwnPropertyDescriptors(Jhon));

Object.defineProperty(Jhon, 'pruebaNASA', {
    value: 'extraterrestre',
    enumerable: true,
    writable: true
});