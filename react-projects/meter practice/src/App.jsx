import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [val, valChanger] = useState(30);
  const [on, onChange] = useState(false);
  const meter = useRef(null);

  function MouseDown(e) {
    onChange(true);
    console.log(`touch`);
  }
  function MouseUp(e) {
    onChange(false);
  }
  function MouseMove(e) {
    if (on) {
      const width = meter.current.offsetWidth;
      const x = e.nativeEvent.offsetX;
      const left = meter.current.offsetLeft;
      console.log(e.touches[0].clientX - left);
      valChanger(e.touches[0].clientX - left);
    }
  }

  return (
    <div className="App">
      <meter
        ref={meter}
        min={0}
        max={300}
        value={val}
        onMouseDown={MouseDown}
        onMouseUp={MouseUp}
        onMouseMove={MouseMove}
        onTouchStart={MouseDown}
        onTouchEnd={MouseUp}
        onTouchMove={MouseMove}
      >

      </meter>
    </div>
  )
}

export default App
