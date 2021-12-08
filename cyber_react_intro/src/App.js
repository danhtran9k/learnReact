import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NavbarRoot from './component/NavbartRoot/NavbarRoot';
import BaiTapChiaLayout from './pages/BtChiaLayout_page/BaiTapChiaLayout';
import BaiTapThucHanhLayout from './pages/BtthLayout_page/BaiTapThucHanhLayout';
/* 
Header ở ngoài Switch nên render bình thường
Chỉ cần dẫn link của nav giống ĐN trong Router
https://v5.reactrouter.com/web/guides/quick-start

  Nếu để ko để trong thẻ Route vẫn hiển thị bình thường
  <Route path="/" component={BaiTapThucHanhLayout} />
  -> Path default khi load lên

  Nếu set path mặc định như vậy sẽ xuất hiện cả trang mặc định và các trang khác khi vào link tương ứng
  trùng bao nhiêu thì hiển thị bấy nhiêu
  -> fix bằng từ khóa exact
  -> -> Có thể lồng vô trong Switch nếu muốn kỹ hơn
  
 A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL.
      
  Đang ko backcompatible giữa router 6 và bản 5
    https://stackoverflow.com/questions/63124161/ attempted-import-error-switch-is-not-exported-from-react-router-dom


<Route path='' component={}/> 

*/
function App() {
  return (
    <BrowserRouter>
      <NavbarRoot />
      <Switch>
        <Route exact path="/" component={BaiTapThucHanhLayout} />
        <Route exact path="/demolayout" component={BaiTapChiaLayout} />
        <Route exact path="/thlayout" component={BaiTapThucHanhLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
/* 

https://v5.reactrouter.com/web/guides/quick-start

<BrowserRouter>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/demolayout">Demo layout</Link>
      </li>
      <li>
        <Link to="/thlayout">Thực hành Layout</Link>
      </li>
    </ul>
  </nav>

  <Switch>
    <Route path="/demolayout">
      <BaiTapChiaLayout />
    </Route>
    <Route path="/thlayout">
      <BaiTapThucHanhLayout />
    </Route>
  </Switch>
</div>
</BrowserRouter>

*/
