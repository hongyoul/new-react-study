import './App.css';
import { Counter } from './component/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';

// Redux toolkit의 액션 함수 사용하기!

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
