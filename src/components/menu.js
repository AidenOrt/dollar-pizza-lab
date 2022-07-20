import React from 'react';
import Slice from './slice';
import Pepperoni from './pepperoni';
import MeatLover from './meat-lover';
import Veggie from './veggie';
import Bbq from './bbq';
import './css/menu.css';
import Hawaiian from './hawaiian';


function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Slice
         title='Plain'
         description=
         "It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?"
         price= '$1.00'/>
        
        <Pepperoni/>
        <MeatLover/>
        <Veggie/>
        <Hawaiian/>
        <Bbq/>
      </div>
    </div>
  );
}

export default Menu;
