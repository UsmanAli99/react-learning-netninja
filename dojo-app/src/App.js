import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const comments = 50;
  // const objects = {'name': 'Usman Ali', 'age': 52};
  const isDeactivate = true;
  const href = "https://mail.google.com/mail/u/0/"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Total Comments: { comments } </p>
        {/* <p>{ objects }</p> */}
        <p>{ 10 }</p>
        <p>{ Math.random() }</p>
        <a href={href}>Click here</a>
      </div>
    </div>
  );
}

export default App;
