import * as names from './names.js';
import * as hobbies from './hobbies.js';

const nameHobbies = () => {

    let n = names.getName('Federico', 'Fiaschi');
    let h = hobbies.getHobbies('Reading', 'Writing', 'Coding');

    let hobbiesList = h.join(', ');

    return{
        fullName: `${n.firstName} ${n.lastName}`,
        hobbies: hobbiesList
    }

};

console.log(nameHobbies());
