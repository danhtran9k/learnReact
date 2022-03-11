import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="bg-light container-fluid">
        <div className="row">
          <div className="col-3">
            <h3>Khóa 1 - React cơ bản</h3>

            <br></br>

            <NavLink className="d-block" to="/demolayout">
              BaiTapChiaLayout
            </NavLink>
            <NavLink className="d-block" to="/thlayout">
              BaiTapThucHanhLayout
            </NavLink>
            <NavLink className="d-block" to="/databinding">
              Data Binding
            </NavLink>
            <NavLink className="d-block" to="/handleevent">
              Handle Event
            </NavLink>
            <NavLink className="d-block" to="/rendercondition">
              Rendering Condition
            </NavLink>
            <NavLink className="d-block" to="/statedemo">
              State Demo
            </NavLink>
            <NavLink className="d-block txtGlobalStyling" to="/stylingdemo">
              Styling Demo
            </NavLink>
            <NavLink className="d-block" to="/renderloopdemo">
              Render loop demo
            </NavLink>

            <br></br>

            <h3>Khóa 2 - Truyền Data giữa các component</h3>

            <br></br>

            <NavLink className="d-block" to="/demoprop">
              Demo prop
            </NavLink>
            <NavLink className="d-block" to="/demopure">
              Demo pure component
            </NavLink>
            <NavLink className="d-block" to="/democontext">
              Demo Context
            </NavLink>
          </div>
          <div className="col-3">
            <h3>Khóa 3</h3>

            <br></br>

            <NavLink className="d-block" to="/demojss">
              Demo JSS
            </NavLink>
            <NavLink className="d-block" to="/demotheme">
              Demo Theme
            </NavLink>
            <NavLink className="d-block" to="/lifecyclemount">
              Life Cycle Mount
            </NavLink>
            <NavLink className="d-block" to="/lifecycledidupdate">
              Life Cycle Did Update
            </NavLink>
            <NavLink className="d-block" to="/lifecyclereact">
              Life Cycle React
            </NavLink>

            <br></br>

            <h3>Khóa 3 - Hooks</h3>

            <br></br>

            <NavLink className="d-block" to="/demousestate">
              Demo Hook useState
            </NavLink>
            <NavLink className="d-block" to="/demouseeffect">
              Demo Hook useEffect
            </NavLink>
            <NavLink className="d-block" to="/demousecallback">
              Demo Hook useCallback
            </NavLink>
            <NavLink className="d-block" to="/demousememo">
              Demo Hook useMemo
            </NavLink>
            <NavLink className="d-block" to="/demouseref">
              Demo Hook useRef
            </NavLink>
            <NavLink className="d-block" to="/demousereducer">
              Demo useReducer
            </NavLink>
            <NavLink className="d-block" to="/demousecontext">
              Demo useContext
            </NavLink>

            <br></br>

            <h3>Khóa 3 - Spring animation</h3>

            <br></br>

            <NavLink className="d-block" to="/demousespring">
              Demo useSpring
            </NavLink>
            <NavLink className="d-block" to="/ex2spring">
              Ex2 spring - interpolate
            </NavLink>
            <NavLink className="d-block" to="/ex3springs">
              Ex3 spring_S
            </NavLink>
            <NavLink className="d-block" to="/ex4trail">
              Ex4 useTrail
            </NavLink>
            <NavLink className="d-block" to="/ex5transition">
              Ex5 useTransition
            </NavLink>
            <NavLink className="d-block" to="/ex6usechain">
              Ex6 useChain
            </NavLink>

            {/* demo */}
          </div>
          <div className="col-3">
            <h3>Khóa 5.1 Demo TailwindCss</h3>

            <br></br>

            <NavLink className="d-block" to="/twDemoGrid">
              DemoGrid
            </NavLink>
            <NavLink className="d-block" to="/twPaddingMarginDemo">
              PaddingMarginDemo
            </NavLink>
            <NavLink className="d-block" to="/twWidthHeightDemo">
              WidthHeightDemo
            </NavLink>
            <NavLink className="d-block" to="/twFlexDemo">
              FlexDemo
            </NavLink>
            <NavLink className="d-block" to="/twTextBackGroundDemo">
              TextBackGroundDemo
            </NavLink>
            <NavLink className="d-block" to="/twBorderRadiusDemo">
              BorderRadiusDemo
            </NavLink>
            <NavLink className="d-block" to="/twResponsiveDemo">
              ResponsiveDemo
            </NavLink>
            <NavLink className="d-block" to="/twCustomCss">
              CustomCss
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
