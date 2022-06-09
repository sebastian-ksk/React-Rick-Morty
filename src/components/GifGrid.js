import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useFetchGift } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem'
// import { getGifs } from '../helpers/getGifs';
const GifGrid = ({ Category }) => {

  // const [images, setimages] = useState([]);
  const { loading, data: images } = useFetchGift(Category);

  // console.log(state);



  // getGifs();
  return (
    <div>
      <h3> {Category} </h3>
      {
        loading && <p>Loading...</p>
      }
      {
        images.map(
          (img) => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          )
        )

      }


    </div>

  )
};

GifGrid.propTypes = {}

export default GifGrid