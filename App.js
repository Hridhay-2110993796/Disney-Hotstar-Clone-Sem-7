import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MovieList />
      <Footer />
    </div>
  );
};

export default App;