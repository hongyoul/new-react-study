// 1번

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  // 초기값 설정
  let [inputCount, setInputCount] = useState(0);
  
  const TextCount = (이름을_작성하는곳_변수명_한글은_나혼자_볼때) => {
    let text = 이름을_작성하는곳_변수명_한글은_나혼자_볼때.target.value;
    setInputCount(text.length);
  }
  
  return (
    <div>
    <input onChange={TextCount}></input>
    <p>글자수:{inputCount}</p>
    </div>
  );
}

export default App;

// 2번
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  // 초기값 설정
  let [inputCount, setInputCount] = useState(0);
  
  const TextCount = (event) => {
    setInputCount(event.target.value.length);
  }
  
  return (
    <div>
    <input onChange={TextCount}></input>
    <p>글자수:{inputCount}</p>
    </div>
  );
}

export default App;
