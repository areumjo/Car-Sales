import React from 'react';

const AddedFeature = props => {
  console.log('addedFeature props: ', props.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature.name, props.feature.price)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
