import React, { Component } from 'react'
import HeaderDemo from './HeaderDemo'
import ProductDemo from './ProductDemo'

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
