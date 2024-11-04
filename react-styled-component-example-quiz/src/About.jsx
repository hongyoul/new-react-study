import styled from 'styled-components';

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