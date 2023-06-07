import React, { useState } from 'react';
import Card from './component/Card';
import NavBar from './component/NavBar';
import Header from './component/Header';

function App() {
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
      <NavBar cartValue={cartValue} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card setCartValue={setCartValue} productName="Fancy Product" starCount={null} showSaleBadge={false} />
            <Card setCartValue={setCartValue} productName="Special Item" starCount={5} showSaleBadge={true} />
            <Card setCartValue={setCartValue} productName="Sale Item" starCount={null} showSaleBadge={true} />
            <Card setCartValue={setCartValue} productName="Popular Item" starCount={5} showSaleBadge={false} />
            <Card setCartValue={setCartValue} productName="Sale Item" starCount={null} showSaleBadge={true} />
            <Card setCartValue={setCartValue} productName="Fancy Product" starCount={null} showSaleBadge={false} />
            <Card setCartValue={setCartValue} productName="Special Item" starCount={5} showSaleBadge={true} />
            <Card setCartValue={setCartValue} productName="Popular Item" starCount={5} showSaleBadge={false} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
