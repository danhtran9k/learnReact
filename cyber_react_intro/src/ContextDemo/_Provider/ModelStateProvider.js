// Quản lý State nào thì tạo Provider cho state đó
// Thực chất giống 1 dạng redux thu nhỏ cho 1 vài Component nhất định
// Có thể vừa xài Redux (bọc lớn ngoài App) vừa xài Context vẫn ok

import React, { Component } from 'react';
import { ModelContext } from '../_Context/ModelContext';

export default class ModelStateProvider extends Component {
  state = {
    like: 5,
  };

  setLike = () => {
    this.setState({
      like: this.state.like + 1,
    });
  };

  // Từ Context -> Sử dụng Provider để chia sẻ state cho các child Component
  // Chú ý là Context sử dụng setState, sẽ render hàng loại mỗi khi setState được gọi bất kể có deepCopy hay ko
  //   -> Phải biết phối hợp thêm PureComponent render chọn lọc
  //   Chỉ là 1 phương án thay thế tạm ko dùng thư viện Redux, (context có sẵn trong React)
  // Chỉ 1 số TH cụ thể mới ưu việt hơn redux

  render() {
    return (
      // Đưa các State chung và phương thức vào
      <ModelContext.Provider
        value={{ stateLike: this.state.like, setLike: this.setLike }}
      >
        {/* Phạm vi sử dụng context
        Các component bên trong có thể sử dụng được context
        */}
        {this.props.children}
      </ModelContext.Provider>
    );
  }
}
