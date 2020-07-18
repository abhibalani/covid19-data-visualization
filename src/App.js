import React from 'react';
import logo from './logo.svg';
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Routes from "./Routes"


import './App.css';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Container className="App" fluid className={"p-0"}>
        <Header />
        <Routes />
      </Container>
    </React.Fragment>

  );
}

export default App;
