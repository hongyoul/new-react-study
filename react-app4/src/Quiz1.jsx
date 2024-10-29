import logo from './logo.svg';
import './App.css';

// 일반함수
// 사용자 정의함수 - 컴포넌트: html 태그를 만들어서 반환
function Header() {
  return (
    <header>
        <h1>ltem List</h1>
    </header>
      
  );
}

function Item() {
  return (
    <p>ltem Component</p>
  );
}

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Item></Item> 
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    </div>
  );
}

export default App;
