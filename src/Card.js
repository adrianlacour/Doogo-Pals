import React from 'react';

const card = ({name, age, gender, breed, imageSource}) => {
  return(
    <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
      <img src = {imageSource} alt='Cardigan Corgi'width="300" height="300"/>
      <div>
        <h2>{name} - {breed}</h2>
        <p>{age}, {gender}</p>
      </div>
    </div>
  );
}

export default card;
