import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGift = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  })
  //SOLO SE EJECUTA UNA VEZ

  useEffect(
    () => {
      getGifs(category).then(
        imgs => setstate({
          data: imgs,
          loading: false
        })
      );
    }, [category]);
  return state;
}