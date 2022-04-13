const tree = document.getElementById('tree');
for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); // move the text node into span
}
tree.onclick = (e => {
    const target = e.target;
    if (target.tagName == 'LI') {
        const child = target.getElementsByTagName('ul')[0];
        if (!child)
            return;
        child.hidden = !child.hidden;
    }
});
