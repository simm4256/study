import './App.css';
import { useState } from 'react';


function App() {
  let [title, titleChanger] = useState([`블로그이름`, `스`, `보`]);
  let [posts, postsChanger] = useState([
    {
      index: 0,
      title: '강남 고기 맛집',
      date: new Date('2022-03-20 19:22'),
      endorse: 60,
      content: `와 여기 ㄹㅇ 개맛있음
      살면서 먹은 고기중에 제일맛있었다`
    },
    {
      index: 1,
      title: '슉슉 슛슈슈슈ㅠㅠ슈슛ㄱ',
      date: new Date('2022-03-22 13:24'),
      endorse: 32,
      content: `ㅅ슈슈ㅠ슋ㄱ슈슈
      슛ㄱ슈슈슛ㅅㅅ슈슈ㅠㅠ슈슈슈슉`
    },
    {
      index: 2,
      title: '시,시발럼아',
      date: new Date(),
      endorse: 0,
      content: `시시시,,싯,,ㅣㅅ,
      ,,싯,십,바ㅣㄹ,
      ,시발럼아`
    }]);
  let [postVisible, postVisibleChanger] = useState([true, true, true]);
  let [contentsVisible, contentsVisibleChanger] = useState([false, false, false]);
  let [heart, heartChanger] = useState([false, false, false]);

  return (
    <div className="App">
      <div className="black-nav">
        <div id="1">
          <a href='localhost:3000' className='no-reaction'>{title[0]}</a>
        </div>
      </div>
      {posts.map((obj) => {
        return (<>
          {postVisible[obj.index] ? <Post className='post' post={obj} postNumber={obj.index} ></Post> : null}
          {contentsVisible[obj.index] ? <Content className='content' post={obj}></Content> : null
          }
        </>)
      })}
    </div >
  );

  // Components =========================

  function Post(props) {
    return (
      <div className={props.className} >
        <div className='heart'>
          <img src={(`images/heart${heart[props.post.index] ? 'Fill' : 'Empty'}.png`)} onClick={() => { HeartClick(props.post.index) }}></img>
        </div>
        <div className='title' onClick={function () { PostClick(props.postNumber) }}>
          <h3>{props.post.title}  </h3>
          <p>{DateToText(props.post.date, 0, 2)} 발행</p>
        </div>
        <hr />
      </div>
    );
  }

  function Content(props) {
    return (
      <div className={props.className}>
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

  // Events ============================

  function PostClick(num) {
    let tmp = [...postVisible];
    /* for (let i = 0; i < 3; i++) {
      if (i === num) continue;
      tmp[i] = !tmp[i];
    }
    postVisibleChanger(tmp); */

    tmp = [...contentsVisible];
    tmp[num] = !tmp[num];
    contentsVisibleChanger(tmp);
  }

  function HeartClick(num) {
    let tmp = [...heart];
    console.log(tmp);
    tmp[num] = !tmp[num];
    console.log(tmp);
    heartChanger(tmp);
  }
}





// etc functions =======================

function DateToText(date, s, e) {
  let timeArray = [];
  timeArray.push(date.getFullYear());
  timeArray.push(date.getMonth() + 1);
  timeArray.push(date.getDate());
  timeArray.push(date.getHours());
  timeArray.push(date.getMinutes());

  let unit = ['년', '월', '일', '시', '분'];

  let res = [];
  for (let i = s; i <= e; i++)
    res.push(String(timeArray[i]) + unit[i]);
  return res.join(' ');
}

export default App;
