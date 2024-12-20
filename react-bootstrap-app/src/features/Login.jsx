import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomConatainer } from '../components/Styles';


const Login = () => {
  return (
    <CustomCard>
      <CustomConatainer>
        <h3>로그인</h3>
        <form>
        <Form.Group controlId="board.title">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" name="id"></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>패스워드</Form.Label>
          <Form.Control type="password" name="password"></Form.Control>
        </Form.Group>
        <Button variant="secondary" type='submit'>로그인</Button>
        </form>
      </CustomConatainer>
    </CustomCard>
  );
}

export default Login