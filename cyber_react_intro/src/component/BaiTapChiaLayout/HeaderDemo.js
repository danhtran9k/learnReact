import React, { Component } from 'react';

export default class HeaderDemo extends Component {
  render() {
    return (
      // Gõ b4-nav gì đó 9e63 chọn đại -> demo only
      // b4-navbar-background -> demo only
      // Các tag ở dưới đều là đối tượng của React -> Ctrl click vô tag được
      // Convert mà lỗi thì phải undo - xóa và convert lại
      // ko convert đè lẹn phần convert lỗi
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a href="https://www.google.com/" className="navbar-brand">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a href="https://www.google.com/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.google.com/" className="nav-link">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="https://www.google.com/"
                  className="nav-link dropdown-toggle"
                 
                  id="dropdownId"
                  data-toggle="dropdown"
                  // aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a href="https://www.google.com/" className="dropdown-item">
                    Action 1
                  </a>
                  <a href="https://www.google.com/" className="dropdown-item">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
