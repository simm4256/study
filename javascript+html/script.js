button1.addEventListener('click', (e) => {
    alert(1);
});
button1.addEventListener('click', (e) => {
    alert(2);
})
button1.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "yellow";
})
button1.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white';
})