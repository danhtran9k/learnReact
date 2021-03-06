import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarRoot.css';

/*
 Dường dẫn phân biệt hoa thường 
 a-> NavLink , href -> to
    -> fix việc xoay icon của tab khi tải lại trang

    activeClassName sẽ được thêm vào khi NavLink đó active -> native sup
    cũng có thể tạo inline css với activeStyle
 */

export default class NavbarRoot extends Component {
  render() {
    const activeLinkStyle = {
      fontWeight: 'bold',
    };

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-info mt-1">
        <NavLink className="navbar-brand" to="/">
          Root Nav
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#navRootId"
          aria-controls="navRootId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navRootId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                activeClassName="activeNavItem"
                activeStyle={activeLinkStyle}
                className="nav-link"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropup">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                K1
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demolayout"
                >
                  BaiTapChiaLayout
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/thlayout"
                >
                  BaiTapThucHanhLayout
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/databinding"
                >
                  Data Binding
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/handleevent"
                >
                  Handle Event
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/rendercondition"
                >
                  Rendering Condition
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/statedemo"
                >
                  State Demo
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/stylingdemo"
                >
                  Styling Demo
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/renderloopdemo"
                >
                  Render loop demo
                </NavLink>
                {/* demo K1*/}
              </div>
            </li>
            <li className="nav-item dropup">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                K2
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demoprop"
                >
                  Demo prop
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demopure"
                >
                  Demo pure component
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/democontext"
                >
                  Demo context
                </NavLink>

                {/* demo K2*/}
              </div>
            </li>
            <li className="nav-item dropup">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                K3
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demojss"
                >
                  Demo JSS
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demotheme"
                >
                  Demo Theme
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/lifecyclemount"
                >
                  Life Cycle mount
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/lifecycledidupdate"
                >
                  Life Cycle Did Update
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/lifecyclereact"
                >
                  Life Cycle React
                </NavLink>
                {/* demo K3*/}
              </div>
            </li>
            <li className="nav-item dropup">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                K3_Hook
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demousestate"
                >
                  Demo useState
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demouseeffect"
                >
                  Demo useEffect
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demousecallback"
                >
                  Demo useCallback
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demousememo"
                >
                  Demo useMemo
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demouseref"
                >
                  Demo useRef
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demousereducer"
                >
                  Demo useReducer
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demousecontext"
                >
                  Demo useContext
                </NavLink>
                {/* demo K3*/}
              </div>
            </li>
            <li className="nav-item dropup">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                K3 Spring
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/demousespring"
                >
                  Demo useSpring
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/ex2spring"
                >
                  Ex2 spring
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/ex3springs"
                >
                  Ex3 spring_S
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/ex4trail"
                >
                  Ex4 useTrail
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/ex5transition"
                >
                  Ex5 useTransition
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/ex6usechain"
                >
                  Ex6 useChain
                </NavLink>

                {/* demo K3*/}
              </div>
            </li>
            <li className="nav-item dropup">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tailwind
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twDemoGrid"
                >
                  DemoGrid
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twPaddingMarginDemo"
                >
                  PaddingMarginDemo
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twWidthHeightDemo"
                >
                  WidthHeightDemo
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twFlexDemo"
                >
                  FlexDemo
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twTextBackGroundDemo"
                >
                  TextBackGroundDemo
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twBorderRadiusDemo"
                >
                  BorderRadiusDemo
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twResponsiveDemo"
                >
                  ResponsiveDemo
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twCustomCss"
                >
                  CustomCss
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twBtCard"
                >
                  BT Card tw
                </NavLink>
                <NavLink
                  activeClassName="activeNavItem"
                  activeStyle={activeLinkStyle}
                  className="dropdown-item"
                  to="/twBtSidebar"
                >
                  BT Sidebar tw
                </NavLink>

                {/* demo Tailwind*/}
              </div>
            </li>
            {/* demo*/}
          </ul>
        </div>
      </nav>
    );
  }
}
