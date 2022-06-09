
export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=GJkIVPN79qQ3iCP6iWtb6nYMYE1M24Uh&q=${encodeURI(category)}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  })
  // console.log(gifs);
  return gifs;
};

