import React from 'react';
import { connect } from 'react-redux';
import { addNewItem, removeItem } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  console.log('props:', props)

  const removeFeature = (item, price) => {
    // dispatch an action here to remove an item
    console.log('remove button works?', 'price:', price, 'item:', item);
    props.removeItem(item, price);
  };

  const buyItem = (item, price) => {
    // dipsatch an action here to add an item
    console.log('buy feature works?', 'price:', price, 'item:', item);
    props.addNewItem(item, price);
  };
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("state: ", state);
  return {
    ...state
  };
};

export default connect(
  mapStateToProps, 
  { addNewItem, removeItem }
)(App);
