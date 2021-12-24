import React, { useState } from 'react';
import { animated, useTrail } from 'react-spring';

const items = [
  { title: 'FrontEndOnline', content: 'cyberlearn' },
  { title: 'FrontEndOffline', content: 'cybersoft' },
  { title: 'FrontEndTuXa', content: 'cybersoft' },
];

export default function Ex4UseTrail() {
  let [status, setStatus] = useState(true);
  let [trailColor, setTrailColor] = useState('red');

  //   Nếu trả về callback thì có thể bóc tách api ra, nhưng lại phải gọi thông qua api chứ ko qua việc change state được nữa -> tự comment lại check
  //   https://react-spring.io/hooks/use-trail#or-pass-a-function-that-returns-values-and-update-using-set
  // Tham số thứ 2 trong docs ở đây là callback

  
  //   const [propsUseTrail, set, stop] = useTrail(items.length, () => {
  //     console.log('trail created');
  //     // với dạng truyền callback thì obj chỉ được tạo 1 lần duy nhất
  //     return {
  // =====================================
  //   nếu trả về trực tiếp obj thì ko bóc api ra được
  //   https://react-spring.io/hooks/use-trail#either-overwrite-values-to-change-the-animation
  // Chú ý là trail trong docs trả obj trực tiếp
  const propsUseTrail = useTrail(items.length, {
    // =====================================
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 80 : 0,
    color: trailColor,
    from: { opacity: 0, x: 20, height: 0, color: 'green' },
    config: { duration: 500 },
    // =====================================
  });
  // =====================================
  // trả về cho arrow func
  //     };
  //   });

  console.log('status:', status);

  //   apiTrailCall.start({
  //     opacity: status ? 1 : 0,
  //     x: status ? 0 : 20,
  //     height: status ? 80 : 0,
  //   });

  //   console.log('propsUseTrail[0]:', propsUseTrail[0]);

  return (
    <div>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        setStatus
      </button>
      <button
        onClick={() => {
          setTrailColor('blue');
        }}
      >
        setColor - blue
      </button>
      <button
        onClick={() => {
          setTrailColor('yellow');
        }}
      >
        setColor - vàng
      </button>
      {propsUseTrail.map((propsUseSprings, index) => {
        return (
          <animated.h1 key={index} style={propsUseSprings}>
            {items[index].title}
          </animated.h1>
        );
      })}
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        setStatus - bug UI cannot click
      </button>
      <button
        onClick={() => {
          setTrailColor('blue');
        }}
      >
        setColor - blue
      </button>
      <button
        onClick={() => {
          setTrailColor('yellow');
        }}
      >
        setColor - vàng
      </button>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        setStatus - Ok no bug
      </button>
    </div>
  );
}
/**
 * https://react-spring.io/hooks/use-trail
 * https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/trail
 * Ý tưởng demo tương tự docs -> click vô toàn bộ mảng chữ chạy animation đồng loạt
 * useSpring_S tạo ra các useSpring khác nhau tùy cách map
 * useTrail Creates multiple springs with a single config, each spring will follow the previous one. Use it for staggered animations.
 * -> arr trail sẽ có tính chất nối đuôi khi map vào jsx
 */
