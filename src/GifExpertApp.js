
import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  // const categories = ['One Punch', 'samurai X', 'Dragon ball'];
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   serCategories([...categories, 'otra']);
  //   console.log(categories);
  // }

  return (
    <div>


      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              Category={category} />
          ))
        }
      </ol>

    </div>
  )
};

export default GifExpertApp