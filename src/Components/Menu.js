import React from 'react';
import Color from './Color.js'

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color="red" handleClick={props.func}></Color>
          <Color color="blue" handleClick={props.func}></Color>
          <Color color="green" handleClick={props.func}></Color>
          <Color color="yellow" handleClick={props.func}></Color>
      </div>
    );
}

export default Menu;