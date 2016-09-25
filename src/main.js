import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

const template = (
  <div style={{ maxWidth: '300px' }}>
    <Card img={'img_avatar.png'} title={'John Doe'} description={'Web programmer'} />
    <br />
    <Card img={'img_avatar2.png'} title={'Jane Doe'} description={'Full-Stack programmer'} rounded />
  </div>
);

ReactDOM.render(template, document.getElementById('app'));

