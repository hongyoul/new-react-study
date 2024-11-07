import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todoSlice } from '../App';

const Todo = () => {

  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  // state 중에서 list 조회
  const list =useSelector((state)=>{
    console.log(state);
    return state.todo.todolist;
  });

  return (
    <div>
    
    {/* 새 할일 입력 필드 */}
    <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="새 할 일 입력"
  />

    {/* 추가 버튼 */}
  <button onClick={()=>{

    // 액션 타입 수정(슬라이스이름/타입)
    // dispatch({type: 'todoSlice/ADD', text: input });
    
    // 액션을 직접 넘기지 않고 액션함수를 사용
    dispatch(todoSlice.actions.ADD(input));

    setInput(''); 
  }}>추가</button>

  <button onClick={() =>{

    // dispatch({ type: 'todoSlice/RESET'});

    // 액션타입을 직접 전달하지 않고 액션함수 사용
    dispatch(todoSlice.actions.RESET())
    
    }}>초기화</button> 

  {/* 할 일 목록 */}
  <ul>
  
    { list.map( (todo)=>{
      return (
      <li key={todo.id}>{todo.text}<button onClick={ ()=>{
        // 단건 삭제는 삭제할 대상을 지정해야함
        // 조건 : 식별자(아이디, 번호 등..)
        // 이전 코드를 dispatch({type: 'todoSlice/DELETE', id: todo.id}); 아래와 같이  액션 함수로 변경한다
        dispatch(todoSlice.actions.DELETE(todo.id));

      } }>삭제</button></li>
      );
    } )}
  </ul>

  </div>
  )
}

export default Todo