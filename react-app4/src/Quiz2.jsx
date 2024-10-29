import logo from './logo.svg';
import './App.css';

// 일반함수
// 사용자 정의함수 - 컴포넌트: html 태그를 만들어서 반환
function Header() {
  return (
    <header>
        <h1>Navigation</h1>
    </header>
      
  );
}

function Navbar() {
  return (
    <div>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Navbar></Navbar>
    </div>
  );
}

export default App;
