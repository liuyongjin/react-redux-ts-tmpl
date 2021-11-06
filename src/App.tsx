import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Home } from "./page/Home";
import { User } from "./page/User";
// import logo from './logo.svg';
import "./App.less";
import { increment } from "./store/features/counterSlice";

function App() {
  const { count } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(increment({ step: 2 })); // dispatch派发action
        }}
      >
        {count}
      </button>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
