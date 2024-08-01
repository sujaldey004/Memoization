import { useState, useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  let looping = useMemo(() => {
    console.log("memo is called")
    let counting = 0;
    for (let i = 1; i <= input; i++) {
      counting = counting + i;
    }
    return counting;
  }, [input])


  return <div>
    <input onChange={(e) => {
      setInput(e.target.value);
    }} />
    <br />
    Sum from 1 to {input} is {looping}
    <br />
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  </div>
}
export default App
