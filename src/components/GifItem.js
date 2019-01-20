import React from 'react';

const GifItem = ({gif, onGifSelect}) => {
  return (
    // need to pass onGifSelect as a prop
    // from GifList to GifItem
    <div className="gif-item" onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized.url} alt="gif"/>
    </div>
  )
};

export default GifItem;