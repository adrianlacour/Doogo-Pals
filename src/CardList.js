import React from 'react'
import Card from './Card'

const CardList = ({doggos}) =>
{
  const cardComponent = doggos.map((dog, index) => {
    return (
      <Card key={index}
        id={doggos[index].id}
        name={doggos[index].name}
        age={doggos[index].age}
        gender={doggos[index].gender} 
        imageSource={doggos[index].imageSource}
        breed={doggos[index].breed}
    />
  );
})

  return(
    <div>
      {cardComponent}
    </div>
  );
}

export default CardList
