import React, { memo } from 'react';

function ChildUseMemo(props) {
  console.log('cart child-useMemo render:' , props.title);
  return (
    <div>
      <h4>{props.title}</h4>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default memo(ChildUseMemo);
/**
 * memo != useMemo
 * Child component này chỉ dùng memo
 */
