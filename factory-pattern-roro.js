
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

    return {
        name,
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        
    };
}

const juan = createStudent({
    name: 'Juanito',
    email: 'juanito@gmail.com'
});