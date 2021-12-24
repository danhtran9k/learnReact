import React from 'react';
import { useSpring, animated } from 'react-spring';
// https://react-spring.io/basics

export default function DemoUseSpring() {
  const propsDocsDemo = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  // Khai báo như kiểu useReducer

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
      
    </div>
  );
}
