import React, { Component } from 'react'
import HeaderDemo from '../../component/BaiTapChiaLayout/HeaderDemo'
import ProductDemo from '../../component/BaiTapChiaLayout/ProductDemo'

export default class BaiTapChiaLayout extends Component {
    render() {
        return (
            <div>
                <HeaderDemo />
                <ProductDemo />
            </div>
        )
    }
}
