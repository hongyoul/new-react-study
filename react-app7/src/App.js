import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {

  return (
    <header>
        <h1><a href='/' onClick={
          (event) => {
            event.preventDefault(); 
            props.onChangeMode(); 
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
          event.preventDefault(); 
          // console.log(event.target.id); 
          props.onChangeMode(event.target.id); 
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

  return( 
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {

  //모드를 결정하는 변수(기존의 변수)
  // let mode ="WELCOME";

  // mode를 state로 생성
  // state: 상태를 관리하며 컴포넌트를 새로 생성하는 역할
  let [mode, setState] = useState('WELCOME'); // 초기값 

  console.log(mode, setState);

  // 본문을 저장할 변수
  let content = null;

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  // 모드에 따라 Article 컴포넌트를 생성
  if(mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>

  } else if(mode === "READ"){
    content = <Article title="READ" body="Hello, READ"></Article>
  }
  
  return (
    <div>
      {/* Header를 클릭하면 모드가 WELCOME으로 변경 */}
    <Header title="Web" onChangeMode={
      () => {
        setState('WELCOME');
      }
    }></Header>

    {/* Nav를 클릭하면 모드가 READ으로 변경 */}
    <Nav topics={topics} onChangeMode={
      (id) => {
        setState('READ');
      }
    }></Nav>
    {content}
    </div>
  );
}

export default App;
