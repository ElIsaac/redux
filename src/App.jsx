import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
} from "./store/slices/counter/counterSlice";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter app</h1>
      <hr />
      <h2>count is {counter}</h2>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementBy(2));
        }}
      >
        increment 2
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </>
  );
}

export default App;
