import './App.css';
import styled from 'styled-components';

// 2. import styled로 버튼 만들기(tag이름+백틱(안에 CSS추가))
const SimpleButton = styled.button`
  color:white;
  background-color: green; 
`;

// 3. SimpleButton 상속받아 스타일 확장하기
const LargeButton = styled(SimpleButton)`
  font-size: 30px;
`;


// 4. 일반 방식으로 버튼 컴포넌트 생성
  const ReactButton = (props) => {

    console.log(props);

    // className은 스타일드에서 사용하는 속성으로 className을 추가해야 스타일이 적용됨
    return(
      <button className={props.className}>{props.children}</button>
    );
  }

  // 5. 4번의 ReactButton 버튼을 상속받는 styled 버튼 추가
  const LargeReactButton = styled(ReactButton)`
  font-size: 50px;
  `;

// 1. 버튼 컴포넌트(개인 설정)
// const ReactButton = (props) => {

//   console.log(props);

//   // 자바스크립트는 변수명에 대시(-)를 허용하지 않기 때문에
//   // 카멜케이스 기법을로 작성해야함
//   const style = {
//     color:'white',
//     backgroundColor: 'purple' // 월래 CSS:background-Color
//   }

//   return(
//     <button style={style}>{props.children}</button>
//   );
// }


// 6. 함수와 조건문을 사용하여 스타일 지정하기
//    함수에서 리턴되는 값이 color가 됨
const PrimaryButton = styled.button`
  color: ${
    function(props){
      if (props.primary) { // (props.primary === true)인데 boolean으로 되어있어서 생략가능
        return 'green'
      } else {
        return 'pink'
      }
    }
  }
`;

function App() {
  return (
    <div className="App">
      {/* <ReactButton>1. React</ReactButton> */}

      {/* import styled 버튼 */}
      <SimpleButton>2. Simple</SimpleButton>

      <LargeButton>3. SimpleButton 스타일 상속 </LargeButton>

      <ReactButton>4. React</ReactButton> 

      <LargeReactButton>5.React 스타일 상속</LargeReactButton>
      
      <PrimaryButton>6. 함수 및 조건문 사용 스타일</PrimaryButton>
      <PrimaryButton primary>6. primary 속성 추가 조건문 </PrimaryButton>

    </div>
  );
}

export default App;
