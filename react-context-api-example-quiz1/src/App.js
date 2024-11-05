import './App.css';
import { useState, useReducer } from 'react';

// to-do-list

// reducer 함수 정의
const todoReducer = (oldState, action) =>{
  switch (action.type) {
    case 'ADD': // 할일 추가
      let newId = 0;
      // 새 할 일을 객체로 만들어서 기존 상태(oldState) 뒤에 추가
      if (oldState.length !==0) {
        newId = oldState[oldState.length -1].id +1 // newId 값을 기준을 두고 기존의 값에서 하나씩 추가 
      }
      return[...oldState, {id: newId, text: action.text }]; 
    case 'DELETE': // 추가된 할 일을 삭제
    // filter 메서드를 사용하여 삭제하려는 할 일이 포함된 배열에서 그 아이템을 제외한 나머지 아이템들을 반환
      return oldState.filter(todo => todo.id !== action.id); // 아이디 값이 동일할지 확인후 삭제
    case 'RESET': 
      return[]; // 초기값으로 돌아가기
    default:
    return oldState;  
    }
};

function App() {
  // useReducer는 todoReducer와 초기값 [](빈 배열)을 인자로 받음
  //  todo는 할 일 목록을, todoDispatch는 상태 변경을 위한 디스패치 함수
  const [todo, todoDispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');

  // 할일 추가
  // addTodo 함수는 사용자가 텍스트 입력 후 "추가" 버튼


  // 준비물 : 상태를 변경하는 로직을 가지고 있는 함수
  // 매개변수: 이전 todolist , 액션
  // 리턴값: 새로운 todolist
  const addTodo = () => {
    // ADD 액션을 디스패치하여 input에 입력된 텍스트를 새로운 할 일로 추가
    todoDispatch({ type: 'ADD', text: input });
    setInput(''); // 입력 필드 초기화
  };


return (
  <div>
    <h3>To-Do-List</h3>
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 할 일 입력"
      />
      <button onClick={addTodo}>추가</button>
      <button onClick={() => todoDispatch({ type: 'RESET' })}>초기화</button>
      <ul>
        {todo.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => todoDispatch({ type: 'DELETE', id: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
);
}

export default App;