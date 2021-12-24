import React from 'react';
import { useSpring, animated } from 'react-spring';
// https://react-spring.io/basics

export default function DemoUseSpring() {
  const propsDocsDemo = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  // Khai báo như kiểu useReducer
  // chú ý 2 phương thức to sẽ trả về data hiện tại khi đang chạy animation

  //   https://react-spring.io/basics#finally-tie-the-animated-values-to-your-view
  // -> Make sure to extend the native element you want to animate using animated
  //   Tập đọc docs -> demo

  const propsAnim = useSpring({
    color_text: 'red',
    from: { color_text: 'green' },
    config: { duration: 1000 },
  });
  //   Nếu sử dụng tên biến khác css thì phải binding css value
  //   VSCode format màu theo tên biến có tjhe63 bị delay

  const propsAnimNumber = useSpring({
    num: 80,
    color: 'red',
    from: { num: 16, color: 'blue' },
    config: { duration: 3000 },
  });

  const propsRemNum = useSpring({
    num: 5,
    from: { num: 1 },
    config: { duration: 3000 },
  });

  return (
    <div>
      <h1>Demo useSpring</h1>

      <animated.div style={propsDocsDemo}>I will fade in</animated.div>

      <animated.div
        style={{
          color: propsAnim.color_text,
        }}
      >
        use Spring change color
      </animated.div>
      <hr />
      <h1>Change number</h1>
      <animated.h1
        style={{
          color: propsAnimNumber.color,
        }}
      >
        {propsAnimNumber.num}
      </animated.h1>

      <animated.p
        style={{
          fontSize: propsAnimNumber.num,
        }}
      >
        console log Spring
        {console.log('propsAnimNumber.num:', [propsAnimNumber.num])}
        {/* {propsAnimNumber.num / 16} rem */}
        {/* Tuy nhiên  {propsAnimNumber.num} ko phải là 1 str mà là 1 obj -> ko cộng chuỗi trong thẻ p như bình thường được, không gán kèm thẻ span bên trong được nếu đã để animate trước*/}
      </animated.p>

      <animated.p
        style={{
          fontSize: propsAnimNumber.num,
        }}
      >
        <animated.span style={{ propsRemNum }}>
          {propsRemNum.num.to(
            // (n) => n.toFixed(2) + ' rem - ' + n.toFixed(2) * 16 + ' px'
            (n) => ` ${n.toFixed(2)} rem - ${(n * 16).toFixed(2)} px`
          )}
        </animated.span>
        {/* {propsAnimNumber.num / 16} rem */}
        {/* Sử dụng phương thức 'to' built-in trong spring có phương thức to */}
      </animated.p>
      <hr />
    </div>
  );
}
