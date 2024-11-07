import './App.css';
import { Counter } from './component/Counter';
import { Provider } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';


//1. 스토어를 기능별로 나눌 수 있음
//2.state의 불변성을 유지할 필요가 없음

// toolkit으로 스토어 만드는 방법
// 카운터 슬라이스 생성 > 슬라이스를 모아서 스토어 생성

// 변경!
// reducer + createStore => createSlice + configureStore

// 1. 카운터 슬라이스 생성(작은 스토어)

// 인자: {}슬라이스 이름, 상태 초기값, 리듀서 함수
// Key 값은 고정!
  const counterSlice = createSlice( {
    name: 'counterSlice',
    initialState: {num: 0 },
    // 액션타입별로 리듀서 함수 정의
    // 액션타입 : 함수
    reducers: {
      up: (state, action) => {
        // step만큼 num의 값을 증가 시키기
        state.num = state.num + action.step
      } 
    }
  });

// 리듀서의 변환
// 1. 이전 코드는 조건문을 사용했으나 슬라이스는 액션타입만 쓰면 됨
// 2. 이전코드는  state를 복제하고 변경된 state를 반환했지만 
//    슬라이스는 state를 그대로 사용하면 됨 

//  슬라이스를 모아서 스토어 생성
//  인자: {} 각 슬라이스의 리듀서 넣기
const store = configureStore({
  reducer: {
    // 각슬라이스의 리듀서가 들어가는 위치
    // 슬라이스 이름 : 리듀서 함수
    counter: counterSlice.reducer
  }
});


function App() {
  return (
    <div>
      {/* provider로 앱에 스토어 주입 */}
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
    </div>
  );
}

export default App;
