import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DataBindingDemo from './component/DataBinding/DataBindingDemo';
import HandleEvent from './HandleEvent/HandleEvent';
import NavbarRoot from './component/NavbarRoot/NavbarRoot';
import BaiTapChiaLayout from './pages/BtChiaLayout_page/BaiTapChiaLayout';
import BaiTapThucHanhLayout from './pages/BtthLayout_page/BaiTapThucHanhLayout';
import Home from './pages/Home/Home';
import RenderingCondition from './RenderingConditions/RenderingCondition';
import StateDemo from './State/StateDemo';
import Styling from './Styling/Styling';
import RenderWithLoop from './RenderWithLoop/RenderWithLoop';
import DemoProps from './Props/DemoProps';
import DemoPureComponent from './DemoPureComponent/DemoPureComponent';
import ContextDemo from './ContextDemo/ContextDemo';
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS';
import DemoTheme from './JSS_StyledComponent/Themes/DemoTheme';
import LifeCycleMount from './LifeCycleReact/LifeCycleMount';
import LifeCycleDidUpdate from './LifeCycleReact/LifeCycleDidUpdate';
import LifeCycleReact from './LifeCycleReact/LifeCycleReact';
import DemoHookUseState from './Hooks/DemoHookUseState';
import DemoHookUseEffect from './Hooks/DemoHookUseEffect';
import DemoHookUseCallback from './Hooks/DemoHookUseCallback';
import DemoHookUseMemo from './Hooks/DemoHookUseMemo';
import DemoUseRef from './Hooks/DemoUseRef';
import DemoUseReducer from './Hooks/DemoUseReducer';
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/demolayout" component={BaiTapChiaLayout} />
        <Route exact path="/thlayout" component={BaiTapThucHanhLayout} />
        <Route exact path="/databinding" component={DataBindingDemo} />
        <Route exact path="/handleevent" component={HandleEvent} />
        <Route exact path="/rendercondition" component={RenderingCondition} />
        <Route exact path="/statedemo" component={StateDemo} />
        <Route exact path="/stylingdemo" component={Styling} />
        <Route exact path="/renderloopdemo" component={RenderWithLoop} />
        {/* Khóa 2 */}
        <Route exact path="/demoprop" component={DemoProps} />
        <Route exact path="/demopure" component={DemoPureComponent} />
        <Route exact path="/democontext" component={ContextDemo} />
        {/* Khóa 3 */}
        <Route exact path="/demojss" component={DemoJSS} />
        <Route exact path="/demotheme" component={DemoTheme} />
        <Route exact path="/lifecyclemount" component={LifeCycleMount} />
        <Route
          exact
          path="/lifecycledidupdate"
          component={LifeCycleDidUpdate}
        />
        <Route exact path="/lifecyclereact" component={LifeCycleReact} />
        {/* K3 - demo Hooks */}
        <Route exact path="/demousestate" component={DemoHookUseState} />
        <Route exact path="/demouseeffect" component={DemoHookUseEffect} />
        <Route exact path="/demousecallback" component={DemoHookUseCallback} />
        <Route exact path="/demousememo" component={DemoHookUseMemo} />
        <Route exact path="/demouseref" component={DemoUseRef} />
        
        <Route exact path="/demousereducer" component={DemoUseReducer} />

        {/* demo */}
      </Switch>
      <hr />
      <NavbarRoot />
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
