import logo from './logo.svg';
import './App.css';
import HeaderRcc from './component/Demo/HeaderRcc';
import HeaderRfc from './component/Demo/HeaderRfc';
import BaiTapChiaLayout from './component/BaiTapChiaLayout/BaiTapChiaLayout';
import Home from './component/BaiTapChiaLayout/Home';
// nếu gõ Header trong App ko có cú pháp auto import của VScode 
// -> tự lên trên gõ tay trước, hên xui sẽ có nhắc nhưng tránh quên
// import Header from './component/Demo/Header';
// Hoặc gõ <Hea ... sẽ có nhắc auto import
// Nếu ko có comp con bên trong thì />
// Hoặc cũng có thể đóng mở như ag bình thường, kết hợp auto close tag ex
function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <HeaderRcc />
      <HeaderRfc ></HeaderRfc>
      <hr></hr>
      <BaiTapChiaLayout />
      <hr></hr>
      <Home />
    </div>
  );
}

export default App;
