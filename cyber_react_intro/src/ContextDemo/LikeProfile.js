import React, { Component } from 'react';
import { ModelContext } from './_Context/ModelContext';

export default class LikeProfile extends Component {
  // Demo việc dùng Context bọc toàn bộ return
  // Chú ý bên trong <ModelContext.Consumer> là 1 hàm {}
  //  hàm có { return (<> CONTENT </>) }
  // Quên return sẽ ko render

  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div className="mt-5">
              <div
                className="card text-white bg-default text-dark"
                style={{ width: 300 }}
              >
                <div className="card-body">
                  <button
                    onClick={() => {
                      value.setLike();
                    }}
                    style={{ color: 'red', border: '1px solid red' }}
                    className="card-title"
                  >
                    {value.stateLike} Like <i className="fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}
