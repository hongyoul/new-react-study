import logo from './logo.svg';
import './App.css';

// 일반함수
// 사용자 정의함수 - 컴포넌트: html 태그를 만들어서 반환
function Header() {
  return (
    <header>
        <h1>Section Component</h1>
    </header>
      
  );
}

function Content() {
  return (
    <div> Content Component </div>
  );
}

function Section() {
  return (
    <div>
    <Content></Content>
    <Content></Content>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Section></Section>
    <Header></Header>
    <Section></Section>
    </div>
  );
}

export default App;
