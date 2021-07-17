console.log("This is project 10 on flip a coin")

let coin = document.getElementById('coin');
let head = document.getElementById('Heading');

coin.addEventListener('click', (e) => {
    // console.log('You clicked on coin')
    e.target.className += ' flip';
    head.classList.remove('flip');
    setTimeout(() => {
        e.target.classList.remove('flip');
        // console.log('Ok stop flipping')
        let rand = Math.floor(Math.random() * 2);

        if (rand == 0) {
            head.innerHTML = 'Head';
        }
        else if (rand == 1) {
            head.innerHTML = 'Tail';
        }
    }, 2000);
})

let green = document.getElementById('green');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');

green.addEventListener('click', ()=>{
    // console.log('You clicked on green');
    coin.style.backgroundColor = 'green';
})

red.addEventListener('click', ()=>{
    // console.log('You clicked on red');
    coin.style.backgroundColor = 'red';
})

yellow.addEventListener('click', ()=>{
    // console.log('You clicked on yellow');
    coin.style.backgroundColor = 'yellow';
})
