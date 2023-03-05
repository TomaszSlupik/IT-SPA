import { NavButton } from "../common/NavButton"
import { Cart } from "../views/Cart"
import { Home } from "../views/home"
import { RoomList } from "../views/RoomList"

const navItmes = [
    {name: 'Home', component: Home},
    {name: 'Rooms', component: RoomList}, 
    {name: '🛒', component: Cart}

]

export function Nav () {

    const nav = document.createElement('nav')

    const navButtons = navItmes.map (el => {

        return NavButton (el.name, el.component, ['btn'])
        })

        nav.append(...navButtons)


        return nav
    }

