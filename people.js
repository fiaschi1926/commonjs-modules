import names from './names.js';
import hobbies from './hobbies.js';

import axios from 'axios';

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