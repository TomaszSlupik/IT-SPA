export  function Home () {

    const section = document.createElement('section')

    const img = document.createElement('img')
    img.src = require('../assets/support.png')
    img.style.width = '50vw'


    section.innerHTML = `
    <h2> Home </h2>
    <p> Witaj w IT spa </p>
    <p> Kazdy programista w lubi u nas odpoczywać. </p>`

    section.append(img)

    return section
    
}