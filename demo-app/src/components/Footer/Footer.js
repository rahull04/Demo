import React from 'react';
import Button from '../Button/Button';

function Footer() {
  return(
      <div>
          <div>Footer</div>
          <div>Contact no 9155685922</div>
          <Button title={'Contact Us'} clickHandler={()=>console.log('clicked')}  />
      </div>
  )
}

export default Footer;