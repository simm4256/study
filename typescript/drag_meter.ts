const meter = document.getElementById('meter');
const left = meter.getBoundingClientRect().left;
let on = false;
meter.addEventListener('mousedown', (e) => {
    on = true;
})
meter.addEventListener('mouseup', (e) => {
    on = false;
})
meter.addEventListener('mousemove', (e) => {
    on && meter.setAttribute('value', `${e.clientX - left}`);
})