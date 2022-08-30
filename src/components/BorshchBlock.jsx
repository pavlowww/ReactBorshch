import React, { useState } from 'react';

function BorshchBlock(props) {
  const [borshchCount, setBorshchCount] = useState(0);

  const onClickButton = () => {
    setBorshchCount(borshchCount + 1);
  };
  const [activeType, setActiveType] = useState(props.types[0]);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ['Хліб-тарілка', 'класична тарілка'];

  return (
    <div className="borshch-block">
      <img className="borshch-block__image" src={props.imageUrl} alt="Borshch" />
      <h4 className="borshch-block__title">{props.title}</h4>
      <div className="borshch-block__selector">
        <ul>
          {props.types.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? 'active' : ''}>
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {props.sizes.map((size, i) => (
            <li key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : ''}>
              {size} гр.
            </li>
          ))}
        </ul>
      </div>
      <div onClick={onClickButton} className="borshch-block__bottom">
        <div className="borshch-block__price">{props.price} ₴</div>
        <div className="button button--outline button--add">
          <span>+ Добавить</span>
          <i>{borshchCount}</i>
        </div>
      </div>
    </div>
  );
}

export default BorshchBlock;
