import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist href="">
        <img
          src="https://sistemasertanejo.com/wp-content/uploads/2018/10/gusttavo.jpg"
          alt="O Embaixador"
        />
        <strong>O Embaixador</strong>
        <p>Conheça as melhores músicas do mais brabo do Brasil.</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://sistemasertanejo.com/wp-content/uploads/2018/10/gusttavo.jpg"
          alt="O Embaixador"
        />
        <strong>O Embaixador</strong>
        <p>Conheça as melhores músicas do mais brabo do Brasil.</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://sistemasertanejo.com/wp-content/uploads/2018/10/gusttavo.jpg"
          alt="O Embaixador"
        />
        <strong>O Embaixador</strong>
        <p>Conheça as melhores músicas do mais brabo do Brasil.</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://sistemasertanejo.com/wp-content/uploads/2018/10/gusttavo.jpg"
          alt="O Embaixador"
        />
        <strong>O Embaixador</strong>
        <p>Conheça as melhores músicas do mais brabo do Brasil.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
