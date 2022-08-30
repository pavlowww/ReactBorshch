import React, { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Всі', "М'ясні", 'Веганські ', 'Гриль ', 'Гостри', 'Хтозна-які '];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={value}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
