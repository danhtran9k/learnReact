import React from 'react';
// RFC thì truyền props vào para!! -> snippet ko có default
export default function ChildRfcPropsObj(props) {
  // es6 destructuring
  let { src, name, price} = props.productItem;

  return (
    <div>
      <img style={{ width: 50 }} src={src} alt={name} />
      <div style={{ width: 225 }} className="card text-left">
        <img className="card-img-top" src={src} alt={name} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
