import './App.css'
import {increment, decrement} from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
const dispatch = useAppDispatch();
const {count} = useAppSelector((state) =>state.counter );

const handleIncrement = (amount: number) => {
  dispatch(increment(amount));
}
const handleDecrement = () => {
  dispatch(decrement());
}

  return (
    <>
     
      <h1>Counter with Redux</h1>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      <h2>{count}</h2>
      <button onClick={handleDecrement}>Decrement</button>
    
    </>
  )
}

export default App
