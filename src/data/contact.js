import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons/faStackOverflow";
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
    {
        link: 'https://github.com/bimurto',
        label: 'Github',
        icon: faGithub,
    },
    {
        link: 'https://www.linkedin.com/in/shawrup-kumer-suter/',
        label: 'LinkedIn',
        icon: faLinkedinIn,
    },
    {
        link: 'https://stackoverflow.com/users/13755857/shawrup',
        label: 'Stackoverflow',
        icon: faStackOverflow,
    },
    {
        link: 'mailto:shawrup.k.suter@gmail.com',
        label: 'Email',
        icon: faEnvelope,
    },
];

export default data;
