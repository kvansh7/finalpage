import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
  <Navbar></Navbar>
    <LoginForm />
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);
