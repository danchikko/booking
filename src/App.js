import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import FormBooking from './components/FormBooking';

function App() {

  return (
    <div className="App">
      <FormBooking />
    </div>
  );
}

export default App;
