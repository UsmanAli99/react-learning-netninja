import { useState } from 'react'

const Home = () => {
  // let name = "Usman Ali"
  const [name, setName] = useState('Usman Ali');
  const [age, setAge] = useState(23);

  const handleClick = () => {
    setName('Ali Usman');
    setAge(24);
  }

  return (
    <div className="home">
      <h1>HomePage</h1>
      <p>{ name } age is {age}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
