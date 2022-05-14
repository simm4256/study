let div = document.getElementById('div1');

function dfs(now) {
    console.log(now.tagName);
    if (now.childNodes.length === 0)
        return;
    for (let i = 0; i < now.childNodes.length; i++) {
        dfs(now.childNodes[i]);
    }
}

dfs(div);