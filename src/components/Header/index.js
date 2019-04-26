import React from "react";

import {Container, Search, User} from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/49447058?v=4" alt="Avatar usuário"/>
      João Amaral
    </User>
  </Container>
)

export default Header;