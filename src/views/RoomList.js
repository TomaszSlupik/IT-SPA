import { cartManager } from "../cart/cart-manager"
import { NavButton } from "../common/NavButton"
import { RoomDetails } from "./Roomdetails"

export  function RoomList () {

    const section = document.createElement('section')
    const ul = document.createElement('ul')

    section.innerHTML = `
    <h2> Room List </h2>
    <p> Sprawdź ofertę pokoi </p>
    <p class="loading"> Ładuję listę pokoi... </p>
    `
    
    // pobieranie z serwera
    fetch('http://localhost:3000/rooms')
        .then(res => res.json())
        .then(rooms => {
            const lis = rooms.map((el => {
                const li = document.createElement('li')

                li.innerHTML = `
                <h4> ${el.name} </h4>
                <p>
                    <strong>${el.price.toFixed(2)} PLN </strong>
                
                </p>
                <footer></footer>
                `
                const addToCartButton = document.createElement('button')
                addToCartButton.innerText = 'Add to cart'
                addToCartButton.classList.add('btn')
                addToCartButton.addEventListener('click', () => {
                    cartManager.addItem(el)
                })


                const detailsBtn = NavButton('Read more...', () => RoomDetails(el.id), ['btn'])

                li.querySelector('footer').append(addToCartButton, detailsBtn)

                return li
            }))

            ul.append(...lis)

            section.querySelector('.loading').remove()
            section.append(ul)
        })
        .catch(err => console.log(err))



    return section
    
}