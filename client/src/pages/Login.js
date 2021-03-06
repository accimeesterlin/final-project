import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import LoginForm from '../components/LoginForm/loginForm';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';

class Login extends Component {

  state = {
    current_user_id: '',
    password: '',
    email: ''
  };

  componentDidMount() {
    //Initial API calls
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <h1>Log In</h1>
            <br />
            <LoginForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
