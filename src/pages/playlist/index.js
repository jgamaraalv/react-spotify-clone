import React from "react";
import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://sistemasertanejo.com/wp-content/uploads/2018/10/gusttavo.jpg"
        alt="O Embaixador"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>O Embaixador</h1>
        <p>19 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Cem Mil</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:12</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
