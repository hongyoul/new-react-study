import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterSlice } from '../store/countSlice'; 

// useSelector: 스토어에서 state를 가져오는 함수
// useDispatch: 스토어에서 state를 변경하는 함수

// + 버튼과 숫자를 담은 UI 반환
export const Counter = () => {

  // redux 스토어의 state 중에서 num 가져오기
  const num = useSelector((state) => {

    // console.log(state);

    return state.counter.num;
  });

  // redux 스토어에서 dispatch 함수 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>{

        // 타입수정: 슬라이스 이름/ 액션타입
        // dispatch( { type: 'counterSlice/up', step: 2 } );

        // 액션타입 대신 액션 함수 사용하기
        // 증가시킬 값은 up함수의 인자로 넣기
        dispatch( counterSlice.actions.up(2) );
      }}>+</button>
      {num}
    </div>
  )
}

