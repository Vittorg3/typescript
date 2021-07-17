const colors: string[]  = ['default-color', 'second-color', 'third-color'];

var ball = document.getElementById('ball') as HTMLElement;

ball.addEventListener('click', () => {
    ball.classList.remove('default-color');
    ball.classList.remove('second-color');
    ball.classList.remove('third-color');

    ball.classList.add(colors[(Math.floor(Math.random() * colors.length))]);
});