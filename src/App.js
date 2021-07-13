import logo from './logo.svg';
import React, { useRef, useState } from "react";
import './App.css';
import InputBox from "./InputBox";

function App() {
  const [inputs, setInputs] = useState({
    initial: "",
    answer: ""
  });

  const { initial, answer } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, // 스프레드 연산자 사용
      [name]: value
    });
  };

  const nextId = useRef(2);
  const onCreate = () => {
    const game = {
      id: nextId.current,
      initial,
      answer
    }

    setGames([...games, game]);

    setInputs({
      initial: "",
      answer: ""
    });

    nextId.current++;
    console.log(games);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span> 초성게임의 초성과 답을 적어 문제를 생성해주세요. </span>
      </header>
      <main>
        <InputBox initial={initial} answer={answer} onChange={onChange} onCreate={onCreate} />
        <GameList games={games} onRemove={onRemove} />
      </main>
    </div>
  );
}

export default App;
