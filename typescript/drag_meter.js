var meter = document.getElementById('meter');
var left = meter.getBoundingClientRect().left;
var on = false;
meter.addEventListener('mousedown', function (e) {
    on = true;
});
meter.addEventListener('mouseup', function (e) {
    on = false;
});
meter.addEventListener('mousemove', function (e) {
    on && meter.setAttribute('value', "".concat(e.clientX - left));
});
