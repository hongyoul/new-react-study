// const 변수명의 첫글자는 무조건 대문자
const HomeBackground = (props) => {
  const style = {
    backgroundColor: '#cce8f4'
  }

  return(
    <div style={style}>
      {props.children}
    </div>
  );
}

function Home(){
  console.log('Home..');
  return (
    <HomeBackground>
      <h2>Home</h2>
      Home page...
    </HomeBackground>
  );
}



// 선생님 예제(app.css사용)
// const Home = () => (
//   <div class='home-div'>
//     <h2>Home</h2>
//       Home page...
//   </div>
// );

export default Home;