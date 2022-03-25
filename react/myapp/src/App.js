import './App.css';
import { useState } from 'react';
import { DateToText } from './Functions';
import { PostClick, HeartClick, inputButtonClick } from './Events';
import { Post, Content, Input } from './Components'


function App() {
  let [blogTitle, titleChanger] = useState([`블로그이름`, `스`, `보`]);
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
  let [postsVisible, postVisibleChanger] = useState([true, true, true]);
  let [contentsVisible, contentsVisibleChanger] = useState([false, false, false]);
  let [heart, heartChanger] = useState([false, false, false]);
  let [time, timeChanger] = useState(new Date());

  let [inputVisible, inputVisibleChanger] = useState(false);
  let [inputTitle, inputTitleChanger] = useState('');
  let [inputContent, inputContentChanger] = useState('');

  let [inputButtonVisible, inputButtonVisibleChanger] = useState(true);

  return (
    <div className="App">
      <div className="black-nav">
        <div className='title'>
          <a href='localhost:3000' className='no-reaction'>{blogTitle[0]}</a>
        </div>
        <div className='timer'>{DateToText(time, 0, 5)}</div>
      </div>
      {posts.map((obj, i) => {
        return (<>
          {postsVisible[i] ? <Post i={i} post={obj} postNumber={i}
            states={{
              heart: heart,
              heartChanger: heartChanger,
              contentsVisible: contentsVisible,
              contentsVisibleChanger: contentsVisibleChanger
            }} ></Post> : null}
          {contentsVisible[i] ? <Content i={i} post={obj}></Content> : null
          }
        </>)
      })}
      {inputVisible ?
        <Input
          states={{
            inputTitle: inputTitle,
            inputTitleChanger: inputTitleChanger,
            inputContent: inputContent,
            inputContentChanger: inputContentChanger
          }}></Input> : null}

      {inputButtonVisible ?
        <div className='inputButton'>
          <img src='images/pencil.png'
            onClick={() => {
              inputButtonClick(
                {
                  inputVisible: inputVisible,
                  inputVisibleChanger: inputVisibleChanger,
                  inputButtonVisible: inputButtonVisible,
                  inputButtonVisibleChanger: inputButtonVisibleChanger,
                  inputTitle: inputTitle,
                  inputContent: inputContent,
                  posts: posts,
                  postsChanger: postsChanger,
                  postsVisible: postsVisible,
                  postVisibleChanger: postVisibleChanger,
                  contentsVisible: contentsVisible,
                  contentsVisibleChanger: contentsVisibleChanger,
                })
            }} />
        </div>
        : null}

    </div >
  );
}

export default App;