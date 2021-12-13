import React from 'react';

export default function ChildFunctional(props) {
  return (
    <div>
      <div>
        <img
          src={props.propSource}
          style={{ width: 100 }}
          alt={props.name}
        />

        <div style={{ width: 300 }} className="card text-left text-secondary">
          <img
            className="card-img-top"
            src={props.propSource}
            alt={props.name}
          />
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
    </div>
  );
}
