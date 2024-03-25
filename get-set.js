function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }

function requiredParam (param) {

    throw new Error(param + ' es obligatorio');
}

function createStudent ({
    name = requiredParam('name'),
    age,
    email = requiredParam('email'),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}){

    const private = {
        '_name': name,
    };

    const public = {

        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },

        get name(){
            return private['_name'];
        },
        set name (newName) {
            if (newName !=0){
                private['_name'] = newName;
            } else {
                console.warn('Tu nombre debe tener al menos un caracter');
            }
            
        }
        
    };


    return public;
    
}

const juan = createStudent({name:'Juanito',email:'juanito@gmail.com'});

console.log(juan.name);

juan.name = 'Rigo';
console.log(juan.name);