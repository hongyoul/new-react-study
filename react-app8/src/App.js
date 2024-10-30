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

// 등록폼을 반환하는 컴포넌트
function Create() {
  return(
    <article>
      <h2>Create</h2>
      <form>
        <p>
          {/* 제목 */}
          <input type="text" name="title" placeholder='title'></input> 
        </p>
        <p>
          {/* 내용 */}
          <textarea name="body" placeholder='body'></textarea>
        </p>
        <p>
          {/* 버튼 */}
          <input type="submit" value='Create'></input>
        </p>
      </form>
    </article>
  );
}

function App() {


  let [mode, setMode] = useState('WELCOME'); 

  let [id, setId] = useState(null);

  let content = null;

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  if(mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>

  } else if(mode === "READ"){
  

    let title, body = null;

    for(let t of topics) {

      if(t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }
    content=<Article title={title} body={body}></Article>

  } else if(mode === "CREATE") {
    // 모드가 CREATE라면, 등록 컴포넌트를 반환
    content = <Create></Create>
  }
  
  return (
    <div>
      <Header title="Web" onChangeMode={
        () => {
          setMode('WELCOME');
        }
      }></Header>

      <Nav topics={topics} onChangeMode={
        (id) => {
          setMode('READ');
          setId(id);
        }
      }></Nav>

      {content}

      {/* 등록폼으로 이동하는 링크 */}
      <a href="/create" onClick={
        (event) => {
          event.preventDefault(); // 다른 페이지로 이동하는 것을 방지
          setMode('CREATE'); // 모드 전환
        }
      }>Create</a>
    </div>
  );
}

export default App;
