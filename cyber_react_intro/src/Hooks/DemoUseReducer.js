import React, { useReducer } from 'react';

// rxreducer snippet
const initialCart = [
  //   { id: 1, name: 'IPhone', price: 1000, quantity: 1 },
  //   { id: 2, name: 'IPhone_fake', price: 2000, quantity: 2 }
];

// ko có state = tateDefault như redux
// Vì là functional nên ta sẽ truyền initialState và khi gọi hàm, ko set es6 default
const cartReducer = (state, action) => {
  console.log('action:', action);
  let stateUpdate = [...state];

  switch (action.type) {
    case 'addToCart': {
      // let stateUpdate = [...state];
      // Đặt ở ngoài switch thì khỏi copy ở mỗi case

      let index = stateUpdate.findIndex(
        (itemCart) => itemCart.id === action.item.id
      );
      if (index !== -1) {
        stateUpdate[index].quantity += 1;
      } else {
        // const itemCart = { ...action.item, quantity: 1 };
        // stateUpdate.push(itemCart);
        stateUpdate.push({ ...action.item, quantity: 1 });
      }
      return stateUpdate;
    }

    default:
      return [...state];
  }
};

// Set mảng ở ngoài để tránh re-render lại
// Các biến, hàm ở ngoài ko bị re-render
let arrProduct = [
  { id: 1, name: 'Iphone', price: 1000 },
  { id: 2, name: 'Note 10 plus', price: 5000 },
  { id: 3, name: 'Huawei P20', price: 1200 },
];

export default function DemoUseReducer() {
  // Gọi Hooks Reducer  ~ useState / redux với tham số 2 là dispatch
  // Vẫn có thể dùng redux và ko dùng reducer
  // Kiến trúc vẫn tương tự
  // 1 dậng setState adv

  // ===================================================================
  let [cart, dispatch] = useReducer(cartReducer, initialCart);
  //   reducer hiện chỉ áp dụng trong component này
  // Phải kết hợp thêm useContext nữa mới tương đương redux
  // ===================================================================
  const addToCart = (itemClick) => {
    //   console.log(itemClick);
    const action = {
      type: 'addToCart',
      item: itemClick,
    };
    dispatch(action);
  };
  /**
   *
   * ko thể đặt hàm chưa dispatch ở ngoài vì ko nhận từ reducer
   * Reducer lại bắt buộc phải đặt trong function vì là Hooks
   *
   */

  return (
    <div>
      <div className="container">
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card text-left">
                  <img
                    className="card-img-top"
                    src={'https://picsum.photos/200/200'}
                    alt={index}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.price}</p>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h3>Giỏ hàng</h3>

        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.quantity * product.price}</td>
                  <td>
                    <button className="btn btn-danger">X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// rxreducer snippet
/**
  
const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case typeName:
        return { ...state, ...payload }

    default:
        return state
    }
}

*/
