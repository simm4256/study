// Events ============================

function PostClick(props) {
    let tmp = [...props.states.contentsVisible];
    tmp[props.i] = !tmp[props.i];
    props.states.contentsVisibleChanger(tmp);
}

function HeartClick(props) {
    let tmp = [...props.states.heart];
    tmp[props.i] = !tmp[props.i];
    props.states.heartChanger(tmp);
}

function inputButtonClick(states) {
    if (!states.inputVisible) {
        states.inputVisibleChanger(true);
    }
    else {
        states.inputVisibleChanger(false);
        let newPost = {
            index: 0,
            title: states.inputTitle,
            date: new Date(),
            endorse: 0,
            content: states.inputContent
        };
        let posts = [...states.posts];
        posts.push(newPost);
        states.postsChanger(posts);

        let postsVisible = [...states.postsVisible];
        postsVisible.push(true);
        states.postVisibleChanger(postsVisible);

        let contentsVisible = [...states.contentsVisible];
        contentsVisible.push(false);
        states.contentsVisibleChanger(contentsVisible);

        console.log(newPost);
    }
}

export { PostClick, HeartClick, inputButtonClick };