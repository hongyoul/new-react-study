import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import { useState, useReducer } from 'react';

function App() {
//1.
  // console.log('App..');

  // stste 생성
  // 현재 상태(read only), 값을 변경하는 함수
  let [count, setCount] = useState(0); // 초기값
  
    function down(){
      setCount(count-1);
    }
  
    function result(){
      setCount(0);
    }
  
    function up(){
      setCount(count+1);
    }
  
//2.
  // reducer(리듀서) 함수: 이벤트에 따라  state를 변경하는 함수
  // 이전 state값, 액션
  // 반환값: 새로운 state
  function countReducer(oldCount, action){
    if (action.type === 'UP') {
      return oldCount + action.num;
    } else if(action.type === 'DOWN') {
      return oldCount - action.num;
    }else if(action.type === 'RESET'){
      return 0;
    }
  }

  // 리듀서 함수를 사용하여 state 생성
  // 인자: 리듀서(state을 변경하는 로직을 가지는 함수), state초기값
  // 반환: 현재 state, 값을 변경하는 dispatch 함수
  const [count1, countDispatch] = useReducer(countReducer,0);

  // 입력된 숫자
  const [num, setNum ] = useState(0);

  return (
    //1.
    // <div className="App">
    //   <input type='button' value="-" onClick={down}></input>
    //   <input type='button' value="0" onClick={result}></input>
    //   <input type='button' value="+" onClick={up}></input>
    //   <span>{count}</span>
    // </div>

    //2.
    <div className="App">
      <input type='button' value="-" onClick={()=>{
        // 액션과 num
        countDispatch({type: 'DOWN', num: num}); // 명령
      }}></input>
      <input type='button' value="0" onClick={()=>{
        countDispatch({type:'RESET', num: num});
      }}></input>
      <input type='button' value="+" onClick={()=>{
        countDispatch({type: 'UP', num: num});
      }}></input>
      <input type='text' onChange={(event)=>{
        console.log(event.target.value)
        setNum(Number(event.target.value));
      }}></input>
      <span>{count1}</span>
    </div>
  );
}

export default App;
