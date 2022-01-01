console.log(window.Redux);
// method
// Trong mô hình redux store bọc lớn nhất -> create cuối
// Tạo những phần con unit nhỏ nhất trước
// SETUP REDUX STORE
// state
// reducer
// store

// Ở đây State init ta dùng thẳng 1 array ko xài obj vì bài toàn đơn giản
const reduxVanilaJsState = ['initial state'];

const reduxVanilaJsReducer = (stateInit = reduxVanilaJsState, action) => {
  const state = { ...stateInit };

  switch (action.type) {
    case 'ADD_HOBBY':
      state.__dataChange = action.payload;
      return state;
    default:
      return stateInit;
  }
};

// export default reduxVanilaJsReducer;

// Create store
const { createStore } = window.Redux;
const store = createStore(reduxVanilaJsReducer);
console.log('store:', store);
