import React, { useState } from 'react';
import StyledApp from 'modules/Main/styled';

const Menu: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <StyledApp.Menu toggle={toggleMenu}>
      <span onClick={() => setToggleMenu(!toggleMenu)}>exp</span>
    </StyledApp.Menu>
  )
}

export default Menu;
