const Home = () => {
  const handleClick = (e) => {
    console.log('Hello World', e);
  }

  const handleAgainClick = (name, e) => {
    console.log('Hello ' + name, e);
  }

  return (
    <div className="home">
      <h1>HomePage</h1>
      <button onClick={ handleClick }>Click me</button>
      <button onClick={(e) => handleAgainClick('Usman Ali', e)}>Click me Again</button>
    </div>
  );
};

export default Home;
