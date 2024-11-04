
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
  return (
    <HomeBackground>
      <h2>Home</h2>
      Home page...
    </HomeBackground>
  );
}

export default Home;