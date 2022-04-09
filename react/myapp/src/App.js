import './App.scss';
import { Datepicker, Eventcalendar } from '@mobiscroll/react'
import "@mobiscroll/react/dist/css/mobiscroll.scss";
import { useState } from 'react';

function App() {
  console.log('rendered');
  const [birthday, setBirthday] = useState(null);
  const onBirthdayChange = (ev) => {
    setBirthday(ev.value);
  }
  return (
    <div className="App">
      <Datepicker
        display='inline'
        controls={['date']}
        touchUi={false}
      />
      <div className="my mbsc-scroller-wheel mbsc-windows-dark mbsc-windows mbsc-ltr"></div>

    </div >
  );
}

export default App;