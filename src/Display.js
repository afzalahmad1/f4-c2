import React from 'react';

const Display= ({ props }) => {
  const {image,name, id, symbol, current_price, total_volume } = props;
 // console.log(props.id);

  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>
      <td>
        <img src={image} alt={image} width="20" height="20" />
      </td>
      <td>${symbol}</td>
      <td>${current_price}</td>
      <td>{total_volume}</td>
    </tr>
    

  );
};

export default Display;