import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import { Nav } from './navigation/Nav';
import { Home } from './views/home';


const main = document.querySelector('main');

main.before(Nav())

document.body.addEventListener('navigate', (event) => {
    const Component = event.detail;

    main.innerHTML = ''
    main.append(Component())
})

main.append( Home() )