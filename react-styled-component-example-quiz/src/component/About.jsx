// const 변수명의 첫글자는 무조건 대문자
import styled from 'styled-components';

// styled을 사용하는 이유는 태그를 만드는 것
const AboutBackground = styled.div`
  background-color: pink;
`;

function About(){
  return (
    <AboutBackground>
      <h2>About</h2>
      About page...
    </AboutBackground>
  );
}
export default About;