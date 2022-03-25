// Components =========================

import { PostClick, HeartClick, inputButtonClick } from './Events';
import { DateToText } from './Functions';

function Post(props) {
    return (
        <div className='post' >
            <div className='heart'>
                <img src={(`images/heart${props.states.heart[props.post.index] ? 'Fill' : 'Empty'}.png`)} onClick={() => { HeartClick(props) }}></img>
            </div>
            <div className='title' onClick={function () { PostClick(props) }}>
                <h3>{props.post.title}  </h3>
                <p>{DateToText(props.post.date, 0, 2)} 발행</p>
            </div>
            <hr />
        </div>
    );
}

function Content(props) {
    return (
        <div className='content'>
            <h2>{props.post.title}</h2>
            <p>{DateToText(props.post.date, 1, 4)}</p>
            <hr />
            <div>
                {props.post.content}
            </div>
            <br />
        </div>
    )
}

function Input(props) {
    return (
        <div className="input">
            <div className="inputTitle">
                <input type="text"
                    onClick={(e) => { if (e.target.value === "제목을 입력하세요") e.target.value = "" }}
                    onChange={(e) => props.states.inputTitleChanger(e.target.value)}
                />
            </div>
            <div className="inputContent">
                <input type="text"
                    onClick={(e) => { if (e.target.value === "내용을 입력하세요") e.target.value = "" }}
                    onChange={(e) => props.states.inputContentChanger(e.target.value)}
                />
            </div>
        </div>
    )
}

export { Post, Content, Input };