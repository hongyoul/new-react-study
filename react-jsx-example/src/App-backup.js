import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  // 자바스크립트로 엘리먼트 생성하기
  let element1 = React.createElement("div", null, "Hello");

  // 리액트의 jsx로 앨리먼트 생성하기
  let element2 = <div>Hello</div>

  const content = '안녕';
  const namePlaceholder = "이름을 입력하세요!";

  //JSX 문법에서 변수를 표현할 때는 {} 중괄호 사용
  return (
    <div className="App">

    {element1}
    {element2}
    <div>{content}</div>
    {/* placeholderd은 사용자에게 안내하는 부분 */}
    <input placeholder={namePlaceholder}></input>
    </div>
  );
}

export default App;
