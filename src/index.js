import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/helloworld';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

ReactDOM.render(<Hello name={formatName(user)} />, document.getElementById('root'));
