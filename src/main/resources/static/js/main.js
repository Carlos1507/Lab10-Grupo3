const mainPup1 = document.querySelector('.mainPup1')
const puppet1 = document.querySelectorAll('.puppet1')
const playerCh1= document.querySelector('.playerCh1')
puppet1.forEach(pup1 => {
    pup1.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        pup1.classList.add('active')
        mainPup1.src = pup1.src
        playerCh1.src=pup1.src
    })
})

const mainPup2 = document.querySelector('.mainPup2')
const puppet2 = document.querySelectorAll('.puppet2')
const playerCh2= document.querySelector('.playerCh2')

puppet2.forEach(pup2 => {
    pup2.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        pup2.classList.add('active')
        mainPup2.src = pup2.src
        playerCh2.src = pup2.src
    })
})

const mainPup3 = document.querySelector('.mainPup3')
const puppet3 = document.querySelectorAll('.puppet3')
const playerCh3= document.querySelector('.playerCh3')

puppet3.forEach(pup2 => {
    pup2.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        pup2.classList.add('active')
        mainPup3.src = pup2.src
        playerCh3.src = pup2.src
    })
})



const mainPup4 = document.querySelector('.mainPup4')
const puppet4 = document.querySelectorAll('.puppet4')
const playerCh4= document.querySelector('.playerCh4')

puppet4.forEach(pup2 => {
    pup2.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        pup2.classList.add('active')
        mainPup4.src = pup2.src
        playerCh4.src = pup2.src
    })
})

const mainPup5 = document.querySelector('.mainPup5')
const puppet5 = document.querySelectorAll('.puppet5')
const playerCh5= document.querySelector('.playerCh5')

puppet5.forEach(pup2 => {
    pup2.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        pup2.classList.add('active')
        mainPup5.src = pup2.src
        playerCh5.src = pup2.src
    })
})


//Coloress
$("#colores2").spectrum({
    color: "#fff",
    showPalette: true,
    palette: [
        ['black', 'white', 'blanchedalmond'],
        ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
    ],
    change: function(color) {
        $('#contenedor2').css("background-color",color.toHexString());
    }
});
$("#colores1").spectrum({
    color: "#fff",
    showPalette: true,
    palette: [
        ['black', 'white', 'blanchedalmond'],
        ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
    ],
    change: function(color) {
        $('#contenedor1').css("background-color",color.toHexString());
    }
});
$("#colores3").spectrum({
    color: "#fff",
    showPalette: true,
    palette: [
        ['black', 'white', 'blanchedalmond'],
        ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
    ],
    change: function(color) {
        $('#contenedor3').css("background-color",color.toHexString());
    }
});

$("#colores4").spectrum({
    color: "#fff",
    showPalette: true,
    palette: [
        ['black', 'white', 'blanchedalmond'],
        ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
    ],
    change: function(color) {
        $('#contenedor4').css("background-color",color.toHexString());
    }
});
$("#colores5").spectrum({
    color: "#fff",
    showPalette: true,
    palette: [
        ['black', 'white', 'blanchedalmond'],
        ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
    ],
    change: function(color) {
        $('#contenedor5').css("background-color",color.toHexString());
    }
});