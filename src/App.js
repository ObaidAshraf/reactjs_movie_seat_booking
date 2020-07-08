import React from 'react';
import './App.css';
import MovieSelect from './components/MovieSelect'
import Showcase from './components/Showcase'
import AllSeats from './components/AllSeats'
import SelectedSeats from './components/SelectedSeats'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div>
        <MovieSelect />
        <Showcase />
        <AllSeats />
        <SelectedSeats />
      </div>
    </GlobalProvider>
  );
}

export default App;
