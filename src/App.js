import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
        <GlobalStyle />
      </BrowserRouter>
    );
  }
}

export default App;
