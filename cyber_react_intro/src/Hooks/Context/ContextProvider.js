import React, { useReducer } from 'react';

// Nho71 export Context ra
export const UseContextDemo = React.createContext();

// Copy lại reducer trong DemoUseReducer.js
const initialCart = [];
const cartReducer = (state, action) => {
  console.log('action:', action);
  let stateUpdate = [...state];

  switch (action.type) {
    case 'addToCart': {
      let index = stateUpdate.findIndex(
        (itemCart) => itemCart.id === action.item.id
      );
      if (index !== -1) {
        stateUpdate[index].quantity += 1;
        return stateUpdate;
      }
      return [...state, { ...action.item, quantity: 1 }];
    }
    default:
      // return state thì default sẽ ko update lại !
      return state;
  }
};

// Chú ý rằng useContext có thể dùng với cả setState nhưng khó mở rộng hơn useReducer
export default function ContextProvider(props) {
  // Dùng ContextProvider bao bọc tất cả component bên trong (cụ thể là App)
  // Tuy nhiên COntext là 1 dạng store local, ko kèm root nên tạm thời bọc Demo này thoi

  let [cart, dispatch] = useReducer(cartReducer, initialCart);

  // store giống như rootReducer
  // =========Nếu ko tạo thì chỉ quản lý local,=================
  // ->bọc toàn app ko có tác dụng vì ko có rootReducer
  const store = {
    cartReducer: [cart, dispatch],
    //
  };

  //Dùng context bao bọc tất cả component bên trong (cụ thể là App)
  return (
    <UseContextDemo.Provider value={store}>
      {props.children}
    </UseContextDemo.Provider>
  );
}
