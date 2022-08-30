import React, { useState } from 'react';

function Sort() {
  const listMenu = ['популярністю', 'вартістю', 'алфавітом'];
  const [activeMenu, setActiveMenu] = useState(0);
  const [open, setOpen] = useState(false);
  const onClickMenu = (i) => {
    setActiveMenu(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортування за:</b>
        <span onClick={() => setOpen(!open)}>{listMenu[activeMenu]}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {listMenu.map((name, i) => (
              <li
                key={i}
                onClick={() => onClickMenu(i)}
                className={activeMenu === i ? 'active' : ''}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
