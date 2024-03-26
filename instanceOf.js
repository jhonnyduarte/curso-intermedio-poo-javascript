function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }

function requiredParam (param) {

    throw new Error(param + ' es obligatorio');
}

function LearningPath ({
    name = requiredParam('name'),
    courses = [],
}){
   this.name = name;
   this.courses = courses; 
}

function Student ({
    name = requiredParam('name'),
    age,
    email = requiredParam('email'),
    x,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}){

    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.learningPaths = [];
    this.socialMedia = {
        x,
        instagram,
        facebook,
    };

    if (!Array.isArray(learningPaths)){
        console.warn('learninPath no es un array');
        return;
    }

    for (let learningPath of learningPaths){
        if (learningPath instanceof LearningPath){
            this.learningPaths.push(learningPath);
        }
    }
    
}



const escuelaWeb = new LearningPath({
    name: 'Escuela de WebDev'
});

const escuelaData = new LearningPath({
    name: 'Escuela Data Science'
})


const juan = new Student({
    name:'Juanito',
    email:'juanito@gmail.com',
    learningPaths:[
        escuelaWeb,
        escuelaData,
    ]});

console.log(juan);

