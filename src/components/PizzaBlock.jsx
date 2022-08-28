import React, { useState } from 'react';

function PizzaBlock(props) {
  const [pizzaCount, setPizzaCount] = useState(0);

  const onClickButton = () => {
    setPizzaCount(pizzaCount +1)
  }

  return (
    <div class="pizza-block">
      <img
        class="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 class="pizza-block__title">{props.title}</h4>
      <div class="pizza-block__selector">
        <ul>
          <li class="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li class="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div onClick={onClickButton} class="pizza-block__bottom">
        <div class="pizza-block__price">от 395 ₽</div>
        <div class="button button--outline button--add">
          <span>+ Добавить</span>
          <i>{pizzaCount}</i>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
