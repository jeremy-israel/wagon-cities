import React, { Component } from 'react';
import City from './city';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

class CityList extends Component {

  componentWillMount() {
    // console.log('YEAH MOFO COMPNENT WILL MOUNT');
    this.props.setCities();
  }
  render(){
    return (
      <div className="cities">
        {this.props.cities.map( city => {
          return (
            <City city={city} key={city.name} />
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
  dispatch );
}

function mapStateToProps(state) { return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
