import React, { Component } from 'react';

class CityList extends Component {

  render(){
    return (
      <div className="cities">
        {this.props.cities.map( city => {
          return (
            <div className="list-group-item">{city.name}</div>
          );
        })}
      </div>
    );
  }
}

export default CityList;
