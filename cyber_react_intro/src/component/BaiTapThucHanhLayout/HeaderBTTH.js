import React, { Component } from 'react';

export default class HeaderBTTH extends Component {
  
  // https://startbootstrap.com/previews/heroic-features
  // Page xài BS5 nhưng đang import bs4 bằng snippet
  // Responsive sẽ ko hoạt động chuẩn ? -> navbar
  // Demo nên copy thẳng html của web gốc
  // Các lỗi xuất hiện trong consol do link href = # -> xóa

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-lg-5">
          <a href="www.google.com" className="navbar-brand">Start Bootstrap</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="www.google.com" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="www.google.com" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="www.google.com" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
