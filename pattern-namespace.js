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
        readName(){
            return private['_name'];
        },
        changeNme(newName){
            private['_name'] = newName;
        }
    };

    Object.defineProperty(public, 'readName',{
        configurable: false,
        writable:false,
    });
    Object.defineProperty(public, 'changeName',{
        configurable: false,
        writable:false,
    });

    return public;
    
}

const juan = createStudent({name:'Juanito',email:'juanito@gmail.com'});
