import './App.css';
import { useState, useReducer } from 'react';

// 계산기 앱 만들기
function App() {
  // state: 숫자, 연산자, 식, 결과 
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState('');
  // 결과는 - + * 연산자 종류에 따라 
  // 상태를 변경하는 로직이 다르기 때문에 useReducer로 변경
  // const [result, setResult] = useState(null); 

  const inputNumber = (value) => {
    setInput(input + value);

    if (operator === null) {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  const inputOper = (value) => {
    setInput(input + value);
    setOperator(value);
  };

// 리듀서 함수: 상태 변경 로직
// 이전 state값, 액션(명령)
// 리턴값: 새로운 state
// 불변성 : state는 이전의 값을 유지하려는 성격이 있음
const resultReducer = (oldResult, action) =>{
  let tempResult =0;
  switch (action.type) {
    case '+':
      tempResult = action.num1 + action.num2;
      break;
    case '-':
      tempResult = action.num1 - action.num2;
      break;
    case '*':
      tempResult = action.num1 * action.num2;
      break;
    case '/':
      tempResult = action.num1 / action.num2;
      break;
    default:
      tempResult = 0;
    }
    return tempResult;
};

// useState => useReducer를 사용하여 state 생성
// 현재 state, dispatch함수
// setState => dispatch
// setState: state를 직접 변경하는 함수
// dispatch: state를 리듀서함수를 통해 수정하는 함수
const [result, resultDispathch] = useReducer(resultReducer, null);

// 리듀서와 초기값
const clear = () => {
  setInput(''); //식
  resultDispathch('0'); // setState 대신 resultDispathch로 변경
  setNum1(null); //숫자1
  setNum2(null); //숫자2
  setOperator(null); //연산자
};

return (
  <div>
    <h3>계산기</h3>
    <div>
      <div><span>식:</span>{input}</div>
      <div><span>결과:</span>{result}</div>
    </div>

    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
        <button key={num} onClick={() => inputNumber(num)}>
          {num}
        </button>
      ))}
    </div>
    <div>
      {['+', '-', '*', '/'].map((op) => (
        <button key={op} onClick={() => inputOper(op)}>
          {op}
        </button>
      ))}
    </div>
    
    <button onClick={() => {
      // set 대신 dispatch 호출
      // 액션은 연산자로 사용. 두 숫자를 함께 전달
      // dispatch -> reducer
      resultDispathch({ type: operator, num1: num1, num2: num2 });
    }}>=</button>

    <button onClick={clear}>C</button>
  </div>
);
}

export default App;