
import './App.css';
import React, { useEffect, useState } from 'react';



function App() {

  const [time, setTime] = useState();
  useEffect(() => {

   const intervalID = setInterval(() => {

      const str = new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true

      })
      setTime(str);

      return () => clearInterval(intervalID);
    }, 1000);
  }, [time]);

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2 className="time">{time} </h2>
    </div>
  )
};

export default App;
