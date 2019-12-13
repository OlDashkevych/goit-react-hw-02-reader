import React from 'react';
import Reader from '../Reader/Reader';
import items from '../../JSON/publications';

const App = () => (
  <div>
    <Reader items={items} />
  </div>
);

export default App;
