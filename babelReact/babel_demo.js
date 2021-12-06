function tick() {
  const element = (
    <div>
      <h1>Demo tick-tock with babel</h1>

      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('tick-clock'));
}

setInterval(tick, 1000);
