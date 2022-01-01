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
      console.log('case ADD_HOBBY state:', state)
      return state;
    default:
      console.log('default')
      return stateInit;
  }
};

// export default reduxVanilaJsReducer;

// Create store
const { createStore } = window.Redux;
const store = createStore(reduxVanilaJsReducer);
console.log('store:', store);

// RENDER REDUX HOBBY LIST

const renderHobbyList = (hobbyList) => {
  // Check input para ko phải array / rỗng -> ko render
  if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

  const ulElement = document.querySelector('#hobbyListId');
  if (!ulElement) return;

  // reset previous content of ul
  ulElement.innerHTML = '';
  for (const hobby of hobbyList) {
    const liElement = document.createElement('li');
    liElement.textContent = hobby;

    ulElement.appendChild(liElement);
  }
};

// RENDER INITIAL HOBBY LIST
const initialHobbyList = store.getState();
// Do store chỉ có dúng 1 array là state cần dùng nên ko . thêm reducer con phía sau

console.log('initialHobbyList:', initialHobbyList);
renderHobbyList(initialHobbyList);

// HANDLE FORM SUBMIT

const hobbyFormElement = document.querySelector('#hobbyFormId');
if (hobbyFormElement) {
  // Ý tưởng ở đây là kie63mt ra 1 lần trên giao diện xem có id=hobbyFormId trước chưa
  // Sau đó mới khởi tạo hàm và gán vào form submit khi ENTER -> ở đ6ya demo ko dùng button
  // Thật ra có thể skip bước check hoặc lôi hàm ra ngoài
  // Tuy nhiên khi đó lại mâu thuẫn với việc phải check điều kiện bypass

  const handleFormSubmit = (e) => {
    // prevent browser from reloading
    e.preventDefault();

    const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId');
    if (!hobbyTextElement) return;

    // get data trong field và dùng dispatch built-in của store redux
    console.log('SUBMIT', hobbyTextElement.value);
    const action = {
      type: 'ADD_HOBBY',
      payload: hobbyTextElement.value,
    };
    console.log('action:', action);
    store.dispatch(action);

    // reset form
    hobbyFormElement.reset();
  };

  hobbyFormElement.addEventListener('submit', handleFormSubmit);
}

// Khi state thay đổi -> re-render lại giao diện
store.subscribe(() => {
  console.log('STATE UPDATE: ', store.getState());
});
