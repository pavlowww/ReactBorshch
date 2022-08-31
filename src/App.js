import React, { useState, useEffect } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Catigories';
import Sort from './components/Sort';
import BorshchBlock from './components/BorshchBlock';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://630e9b1a109c16b9abfd3eb9.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі борщики</h2>
          <div className="content__items">
            {items.map((obj) => (
              <BorshchBlock
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
