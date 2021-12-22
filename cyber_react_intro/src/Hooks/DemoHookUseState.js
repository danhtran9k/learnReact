import React, { useState } from 'react';

export default function DemoHookUseState() {
  //   const [state, setstate] = useState(initialState);
  let [state, setState] = useState({ like: 0 });
  //(1)this.state = {like:0}
  //(2) this.setState(newState);
  //tuple

  const handleLike = () => {
    //Lấy like tăng lên 1 và setState
    setState({
        like: state.like + 1,
    });
    // Ko log sau khi setState ở trên được như trong rcc
    // Nếu log ở phía dưới thì bị trễ 1 nhịp vì async
    console.log('state.like:', state.like)
  };

  /**
   * Khác với rcc, khi useState được gọi sẽ gọi lại toàn bộ function DemoHookUseState
   * useState ko có API callback như trong rcc
   * nhìn giống nhưng flow chạy sẽ khác, sẽ bỏ qua lifecycle
   * Mỗi lần chạy nếu khai báo biến bên trong, các hàm handle sẽ được khỏi tạo lại hết
   * -> tùy cách tổ chức cấu trúc code mà sẽ tối ưu ở mỗi loại
   */
  return (
    <div className="container m-5">
      <div className="card text-left">
        <img
          style={{ height: 250, width: 250 }}
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="picture"
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: 'red' }}> {state.like} ♥</p>
        </div>
      </div>

      <button className="btn btn-danger" onClick={handleLike}>
        Like
      </button>
    </div>
  );
}
