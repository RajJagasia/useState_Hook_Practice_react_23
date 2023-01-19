import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [state, setTime] = React.useState(time);
  function getTime() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
