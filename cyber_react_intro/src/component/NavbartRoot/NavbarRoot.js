import React, { Component } from 'react';

// Dường dẫn phân biệt hoa thường

export default class NavbarRoot extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-info mt-1">
        <a className="navbar-brand" href="/">
          Root Nav
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropup">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropup
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="/demolayout">
                  BaiTapChiaLayout
                </a>
                <a className="dropdown-item" href="/thlayout">
                  BaiTapThucHanhLayout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
