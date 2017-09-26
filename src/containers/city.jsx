import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    console.log('HANDLED CLICK');
    this.props.setActiveCity(this.props.city);
  }
  render(){
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cityIsSelected: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity }, dispatch);
}

export default connect(
mapStateToProps, mapDispatchToProps)(City);
