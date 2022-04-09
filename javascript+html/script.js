let circle = document.getElementById('circle');
const [defaultX, defaultY] = [circle.getBoundingClientRect().left, circle.getBoundingClientRect().top];
const [width, height] = [circle.getBoundingClientRect().width, circle.getBoundingClientRect().height];
box.addEventListener('click', (e) => {
    const [x, y] = [circle.getBoundingClientRect().left, circle.getBoundingClientRect().top];
    circle.style.transform = `translate(${e.clientX - defaultX - width / 2}px, ${e.clientY - defaultY - height / 2}px)`;
})