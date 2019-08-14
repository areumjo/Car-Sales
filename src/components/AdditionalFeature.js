import React from 'react';

const AdditionalFeature = props => {
  console.log('additionalFeature props: ', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.buyItem(props.feature.name)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
