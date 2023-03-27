import { useEffect, useState, useRef } from "react";
import { NumberList } from "./components/NumberList";
import { Form } from "./components/Form";

export function App() {
  const [numbers, setNumbers] = useState([]);
  const [shown, setShown] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3);
  const [launched, setLaunched] = useState(false);
  const timer = useRef(null);
  function generateRandomNumbers() {
    setTimeRemaining(3);
    if (launched) return;
    setLaunched(true);

    const newNumbers = [];
    for (let i = 0; i < 6; i++) {
      const randNum = Math.floor(Math.random() * 9) + 1;
      newNumbers.push(randNum);
    }
    setShown(true);
    setNumbers(newNumbers);
    setTimeout(() => {
      setShown(false);
      console.log("fires");

    }, 3000);
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
  }

  useEffect(() => {
    if (timeRemaining === 0) {
      console.log(timeRemaining);
      clearInterval(timer.current);
      setLaunched(false);
    }
  });

  return (
    <div>
      {launched && <div>{timeRemaining}</div>}
      <button onClick={generateRandomNumbers}>generate</button>

      {shown && <NumberList array={numbers}></NumberList>}
      {!launched && <Form numbers={numbers}></Form>}
      
    </div>
    
  );
}

export default App;
