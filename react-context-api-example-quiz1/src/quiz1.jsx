import './App.css';
import { useReducer } from 'react';

// 계산기 앱 만들기

// 초기상태 정의
const initialState = {
  num1: null, // 입력한 첫번째 숫자
  num2: null, // 입력한 두번째 숫자
  operator: null, // 입력한 연산자
  input: '', // 현재 식
  result: null, // 결과
};

  // 숫자를 입력하는 함수
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_INPUT':
        return{...state, input: state.input + action.value}; // 입력값 추가
      case 'SET_OPERATOR':
        return{...state, operator:action.value, input: state.input + action.value}; // 연산자 설정(+, -, *, /를 클릭했을 때, 그 값을 operator에 저장하고, input에도 그 연산자가 추가)
      case 'SET_NUM1':
        return{...state, num1: action.value}; // 첫 번째 숫자 저장
      case 'SET_NUM2':
        return{...state, num2: action.value}; // 두번째 숫자 저장
      case 'CALCULATE': // 계산을 실제로 수행하는 부분
        let tempResult = 0;
          switch (state.operator) {
            case '+':
              tempResult = state.num1 + state.num2;
              break;
            case '-':
              tempResult = state.num1 - state.num2;
              break;
            case '*':
              tempResult = state.num1 * state.num2;
              break;
            case '/':
              tempResult = state.num1 / state.num2;
              break;
            default:
              tempResult = 0;
            }
            return { ...state, result: tempResult }; // 결과 계산
          case 'CLEAR':
            return initialState; // 상태 초기화
          default:
            return state;
        }
      };


  function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    // 숫자 입력
    const inputNumber = (value)=>{
      dispatch({ type: 'SET_INPUT', value: value });
      if (state.operator === null) {
        dispatch({ type: 'SET_NUM1', value: parseInt(value) });
      } else {
        dispatch({ type: 'SET_NUM2', value: parseInt(value) });
      }
    };

     // 연산자 입력 함수
  const inputOper = (value) => {
    dispatch({ type: 'SET_OPERATOR', value: value });
  };

    // 결과 계산 함수
    const calculate = () => {
      dispatch({ type: 'CALCULATE' });
    };

    // 입력 초기화
  const clear = () => {
    dispatch ({type: 'CLEAR'})
  };

  return (
    <div>
      <h3>계산기</h3>
      <div>
        <div><span>식:</span>{state.input}</div>
        <div><span>결과:</span>{state.result}</div>
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
      <button onClick={calculate}>=</button>
      <button onClick={clear}>C</button>
    </div>
  );
}

export default App;