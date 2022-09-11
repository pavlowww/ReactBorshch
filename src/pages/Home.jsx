import React, { useState, useEffect } from 'react';

import '../scss/app.scss';
import Categories from '../components/Catigories';
import Sort from '../components/Sort';
import BorshchBlock from '../components/BorshchBlock/BorshchBlock';
import BorshchSkeleton from '../components/BorshchBlock/BorshchSkeleton';
import axios from 'axios';


function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://630e9b1a109c16b9abfd3eb9.mockapi.io/items').then((res) => {
      setItems(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Всі борщики</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(12)].map((_, index) => <BorshchSkeleton key={index} />)
          : items.map((obj) => (
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
    </>
  );
}

export default Home;
