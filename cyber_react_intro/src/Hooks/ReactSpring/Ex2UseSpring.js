import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Ex2UseSpring() {
  //   let { color, ...propsUseSpring } = useSpring({
  let { color } = useSpring({
    color: [131, 111, 255], //Màu sắc sau animation (màu sắc trong phần to : {color})
    from: {
      color: [238, 99, 99],
      // Màu sắc bắt đầu, có thể dùng chuỗi string trực tiếp được luôn
      // Tuy nhiên để backend can thiệp vào thì nên để dạng mảng,
      // -> xử lý data, truy xuất sẽ tiện hơn chuỗi gốc (lại phải cắt ra)
    },
    config: { duration: 2000, delay: 0 },
  });
  console.log('color:', color);

  // Tuy chỉ bóc color ra nhưng đây vẫn là 1 obj react-string chứ ko phải array
  // Cách định nghĩa trong có vẻ như obj nhưng thực chất là API
  // propsUseString nếu ko xài thì viết cách dưới, tránh ESLint warn

  return (
    <animated.div
      style={{
        // color: color.interpolate((r, g, b) => {
        //   return `rgb(${r},${g},${b})`;
        // }),
        // "interpolate" function is deprecated, replace with 'to'
        color: color.to((r, g, b) => {
          //  console.log('r:', r);
          // r,g,b khi destruct ra thì là primitive thật sự
          //  Nếu log sẽ thấy giá trị trả về liên tục
          return `rgb(${r},${g},${b})`;
        }),
      }}
    >
      hello cybersoft
    </animated.div>
  );
}

/**
 * https://react-spring.io/basics#view-interpolation
 */