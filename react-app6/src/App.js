import logo from './logo.svg';
import './App.css';

// 이벤트 처리방법

function Header(props) {

  return (
    <header>
        <h1><a href='/' onClick={
          (event) => {
            event.preventDefault(); // 페이지 이동방지
            props.onChangeMode(); // props로 전달 받은 이벤트 함수 실행
          }
        }>{props.title}</a></h1>
    </header>
    
  );
}

function Nav(props) {

  const lis = [];

  for(let t of props.topics) {

    lis.push(<li key={t.id}>
      <a href={'/read/'+t.id} id={t.id} onClick={
        (event) => {
          event.preventDefault(); // 이벤트 객체로 페이지 이동방지
          console.log(event.target.id); // 클릭했을 때 열릴 위치를 명시
          props.onChangeMode(event.target.id); // props로 전달받은 함수 호출
        }
      }>{t.title}
      </a>
      </li>);
  }

  return (
    <ol>
      {lis}
    </ol>
  );
}

function Article(props) {

  console.log(props);

  return( 
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {

  
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];
  return (
    <div>
    {/* Header 컴포넌트에 이벤트 기능 추가 */}
    <Header title="Web" onChangeMode={
      () => {
        alert('hi');
      }
    }></Header>

    {/* Nav 컴포넌트에 이벤트 기능 추가 클릭하면 해당 id가 경고창으로 출력 */}
    <Nav topics={topics} onChangeMode={
      (id) => {
        alert(id);
      }
    }></Nav>

    <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
