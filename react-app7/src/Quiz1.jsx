// 선생님 답
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  // 초기값 설정
  let [number, setNumber] = useState(0);
  
  // 증가, 감소, 초기화 이벤트 함수 정의
  function down() {
    setNumber(number -1);
  }

  function reset() {
    setNumber(0);
  }

  function up() {
    setNumber(number +1);
  }
  
  return (
    <div>
    <input type='button' value="-" onClick={down}></input>
    <input type='button' value="0" onClick={reset}></input>
    <input type='button' value="+" onClick={up}></input>
    <span>{number}</span>
    </div>
  );
}

export default App;


// 내가 작성한 답
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  //state는 컴포넌트의 생명주기르 관리하는 데이터이므로 일반함수에서는 사용할 수 없음
  // 초기값 설정
  let [number, setNumber] = useState(0);
  
  function Subtract() {
    return (
      <button onClick={
        () => {
          setNumber(number -1)
        }
      }>-</button>
    );
  }
  
  function Add() {
    return (
      <button onClick={
        () => {
          setNumber(number +1)
        }
      }>+</button>
    );
  
  }

  function Value() {
    return (
      <button onClick={
        () => {
          setNumber(0)
        }
      }>0</button>
    );
    
  }
  
  return (
    <div>
    <Subtract></Subtract>
    <Value></Value>
    <Add></Add>
    {number}
    </div>
  );
}

export default App;
