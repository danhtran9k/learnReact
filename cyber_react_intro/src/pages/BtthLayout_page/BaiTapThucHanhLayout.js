import React, { Component } from 'react'
import HeaderBTTH from '../../component/BaiTapThucHanhLayout/HeaderBTTH'
import BodyBTTH from '../../component/BaiTapThucHanhLayout/BodyBTTH'
import FooterBTTH from '../../component/BaiTapThucHanhLayout/FooterBTTH'


// https://startbootstrap.com/previews/heroic-features
// Link tham khảo
// Vì demo nên copy thẳng html của web gốc luôn

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <HeaderBTTH />
                <BodyBTTH />
                <FooterBTTH />
            </div>
        )
    }
}
