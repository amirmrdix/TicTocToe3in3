const sun = document.querySelector('.sun')

const clock = document.querySelector('.clock')
const hour = document.querySelector('.hour')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.second')
const ampm = document.querySelector('.ampm')


const date = document.querySelector('.date')
const year = document.querySelector('.year')
const mount = document.querySelector('.mount')
const day = document.querySelector('.day')


const changeTheme = document.querySelector('.changeTheme');
const body = document.querySelector('body')




setInterval(getTime,1000);
changeTheme.addEventListener('click', changeThemeFunction)




function getTime() {
    hour.innerText = new Date().toLocaleTimeString().split(' ')[0].split(':')[0] + ' :'
    min.innerText = new Date().toLocaleTimeString().split(' ')[0].split(':')[1] + ' :'
    sec.innerText = new Date().toLocaleTimeString().split(' ')[0].split(':')[2]
    ampm.innerText = new Date().toLocaleTimeString().split(' ')[1]


    year.innerText = new Date().toLocaleDateString().split('/')[2] + ' /'
    mount.innerText = new Date().toLocaleDateString().split('/')[1] + ' /'
    day.innerText = new Date().toLocaleDateString().split('/')[0]
}




function changeThemeFunction() {
    body.classList.toggle('blackBack')
    clock.classList.toggle('pink1Back')
    date.classList.toggle('pink1Back')


    hour.classList.toggle('pink2Color')
    min.classList.toggle('pink2Color')
    sec.classList.toggle('secondAndAMPM')
    ampm.classList.toggle('secondAndAMPM')


    year.classList.toggle('pink2Color')
    mount.classList.toggle('pink2Color')
    day.classList.toggle('pink2Color')


    sun.querySelector('i').classList.toggle('fa-sun')
    sun.querySelector('i').classList.toggle('fa-moon')
    sun.classList.toggle('sun')
    sun.classList.toggle('moon')
}