import React from 'react';
import '../../App.css';
import Banner from './Banner';
import Products from './Products';

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <Products />
    </div>
  );
}
