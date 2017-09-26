import React from 'react';

const CityList = (props) => {
  return (
    <div className="cities">
      {props.cities.map( city => {
        return (
          <div className="list-group-item">{city.name}</div>
        );
      })}
    </div>
  );
}

export default CityList;
