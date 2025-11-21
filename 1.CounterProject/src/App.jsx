import { useState } from 'react' // useState hook'u ile state değişkenlerini tanımlayabiliriz

function App(){
  const [count, setCount] = useState(0) // state degiskenlerini tanımlıyoruz.

  return (
    <div className='container'>
      <h1>Hello World</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );


}
export default App;