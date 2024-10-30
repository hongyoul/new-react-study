import logo from './logo.svg';
import './App.css';

function Header(props) {

  return (
    <header>
        <h1><a href='/' onClick={
          () => {}
        }>{props.title}</a></h1>
    </header>
    
  );
}


function Nav(props) {

  const lis = [];

  for(let t of props.topics) {

    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>);
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

    <Nav topics={topics}></Nav>

    <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
