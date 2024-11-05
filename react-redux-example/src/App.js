import './App.css';
import {Left1} from './component/Left';
import { Right1 } from './component/Right';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// redux: 앱 전역에서 state를 관리하는 도구
// 이도구를 통해 컴포넌트 간에 state를 공유할 수 있음

// Provider: 하위 컴포넌트들에게 스토어를 전달하는 역할

function App() {
  return (
    <div class='root'>
      
      <Left1></Left1>
      <Right1></Right1>
      
    </div>
  );
}

export default App;
