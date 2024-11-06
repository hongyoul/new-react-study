import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// useSelector: 스토어에서 state를 가지고 오는 함수
// useDispatch: 스토어에서 state를 변경하는 함수

export function Clac(){

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState('');

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

  // redux의 dispatch 생성
  const dispatch = useDispatch();

  const clear = () => {
    setInput('');
    // result state 값을 초기화하기 위해서 디스패치로 전달
    dispatch({type: '0' }); 
    setNum1(null);
    setNum2(null);
    setOperator(null);
  };

  // redux 스토어의 state 중에서 result 가지고 오기
  const result = useSelector((state)=>{
    console.log(state);

    return state.result;
  });


  return(
    <>
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
          // 디스패치로 액션과 작업에 사용할 데이터 전달(기본값 type 필수)
          // 연산자와 두숫자
          dispatch({ type: operator, num1: num1, num2: num2});
        }}>=</button>

        <button onClick={clear}>C</button>
      </>
  );
}