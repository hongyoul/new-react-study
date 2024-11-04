// const 변수명의 첫글자는 무조건 대문자
import styled from 'styled-components';

const ContactBackground = styled.div`
  background-color: yellow;
`;

function Contact(){
  return (
    <ContactBackground>
      <h2>Contact</h2>
      Contact page...
    </ContactBackground>
  );
}

// default 키워드를 사용하면 외부에서 다른이름으로 사용 가능
export default Contact;