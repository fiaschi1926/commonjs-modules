import * as names from './names.js';
import * as hobbies from './hobbies.js';

const nameHobbies = () => {

    let n = names.getName('John', 'Doe');
    let h = hobbies.getHobbies('Reading', 'Hiking', 'Coding');

    let hobbiesList = h.join(', ');

    return{
        fullName: `${n.firstName} ${n.lastName}`,
        hobbies: hobbiesList
    }

};

let a = nameHobbies();
console.log(a);