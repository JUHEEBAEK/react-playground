import React, { useRef, useState } from "react";
import './App.css';
import InputBox from "./InputBox";
import GameList from "./GameList";

function App() {
  const [inputs, setInputs] = useState({
    initial: "",
    answer: ""
  });

  const { initial, answer } = inputs;

  const [games, setGames] = useState([
    {
      id: 1,
      initial: "ㅎㄹㅇ",
      answer: "호랑이"
    },
    {
      id: 2,
      initial: "ㅇㅅㄹ",
      answer: "오소리"
    },
    {
      id: 3,
      initial: "ㅋㄲㄹ",
      answer: "코끼리"
    },
    {
      id: 4,
      initial: "ㅋㅇㄹ",
      answer: "코알라",
    }
  ]);

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

  const onSelect = (id) => {
    const { initial, answer } = games.filter(game => game.id === id)[0];

    setInputs({
      initial: initial,
      answer: answer
    });
  };

  const onClear = () => {
    setInputs({
      initial: "",
      answer: ""
    });
  };

  const onRemove = (id) => {
    setGames(games.filter(game => game.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <span> 초성게임의 초성과 답을 적어 문제를 생성해주세요. </span>
      </header>
      <main>
        <InputBox initial={initial} answer={answer} onChange={onChange} onCreate={onCreate} onClear={onClear} />
        <GameList games={games} onSelect={onSelect} onRemove={onRemove} />
      </main>
    </div>
  );
}

export default App;
