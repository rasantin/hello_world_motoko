import { useState } from 'react';
import { hello_world_backend } from 'declarations/hello_world_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    hello_world_backend.greet(name).then((greeting) => {
      const lines = greeting.split('\n');
      setGreeting(lines.map((line,i) => <div key ={i}>{line}</div>));
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <img src="/UFVJM.png" alt="UFVJM logo" />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Digite o seu nome: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Clique aqui!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
